<template>
  <div class="tab-installed">
    <header class="flex">
      <div class="flex-auto">
        <dropdown
          :closeAfterClick="true"
          :class="{active: menuNewActive}"
          @stateChange="onStateChange">
          <tooltip :content="i18n('buttonNew')" placement="bottom" align="start" slot="toggle">
            <span class="btn-ghost">
              <icon name="plus"></icon>
            </span>
          </tooltip>
          <div
            class="dropdown-menu-item"
            v-text="i18n('buttonNew')"
            @click.prevent="onEditScript('_new')"
          />
          <a class="dropdown-menu-item" v-text="i18n('installFrom', 'Metanet')" href="scripts.bitmonkey.xyz" target="_blank" rel="noopener noreferrer"></a>
          <a class="dropdown-menu-item" v-text="i18n('installFrom', 'OpenUserJS')" href="https://openuserjs.org/" target="_blank" rel="noopener noreferrer"></a>
          <a class="dropdown-menu-item" v-text="i18n('installFrom', 'GreasyFork')" href="https://greasyfork.org/scripts" target="_blank" rel="noopener noreferrer"></a>
          <div
            class="dropdown-menu-item"
            v-text="i18n('buttonInstallFromURL')"
            @click.prevent="installFromURL"
          />
        </dropdown>
        <tooltip :content="i18n('buttonUpdateAll')" placement="bottom" align="start">
          <span class="btn-ghost" @click="updateAll">
            <icon name="refresh"></icon>
          </span>
        </tooltip>
      </div>
      <dropdown align="right" class="filter-sort">
        <tooltip :content="i18n('buttonFilter')" placement="bottom" slot="toggle">
          <span class="btn-ghost">
            <icon name="filter"></icon>
          </span>
        </tooltip>
        <div>
          <locale-group i18n-key="labelFilterSort">
            <select :value="filters.sort.value" @change="onOrderChange">
              <option
                v-for="option in filterOptions.sort"
                :key="option.value"
                v-text="option.title"
                :value="option.value">
              </option>
            </select>
          </locale-group>
        </div>
        <div v-if="filters.sort.value === 'alpha'">
          <label>
            <setting-check name="filters.showEnabledFirst" @change="updateLater"></setting-check>
            <span v-text="i18n('optionShowEnabledFirst')"></span>
          </label>
        </div>
      </dropdown>
      <div class="filter-search hidden-sm">
        <input type="text" :placeholder="i18n('labelSearchScript')" v-model="search">
        <icon name="search"></icon>
      </div>
    </header>
    <div class="scripts">
      <item v-for="script in store.filteredScripts" :key="script.props.id"
      :script="script" :draggable="filters.sort.value === 'exec' && !script.config.removed"
      @edit="onEditScript" @move="moveScript"></item>
    </div>
    <div class="backdrop" :class="{mask: store.loading}" v-show="message">
      <div v-html="message"></div>
    </div>
    <edit v-if="script" :initial="script" @close="onEditScript()"></edit>
  </div>
</template>

<script>
import Dropdown from 'vueleton/lib/dropdown/bundle';
import Tooltip from 'vueleton/lib/tooltip/bundle';
import {
  i18n, sendMessage, noop, debounce,
} from '#/common';
import { objectGet } from '#/common/object';
import options from '#/common/options';
import SettingCheck from '#/common/ui/setting-check';
import hookSetting from '#/common/hook-setting';
import Icon from '#/common/ui/icon';
import LocaleGroup from '#/common/ui/locale-group';
import { setRoute } from '#/common/router';
import Item from './script-item';
import Edit from './edit';
import { store, showMessage } from '../utils';

const SORT_EXEC = { value: 'exec', title: i18n('filterExecutionOrder') };
const SORT_ALPHA = { value: 'alpha', title: i18n('filterAlphabeticalOrder') };
const SORT_UPDATE = { value: 'update', title: i18n('filterLastUpdateOrder') };
const filterOptions = {
  sort: [
    SORT_EXEC,
    SORT_ALPHA,
    SORT_UPDATE,
  ],
};
const filters = {
  sort: {
    value: null,
    title: null,
    set(value) {
      const option = filterOptions.sort.find(item => item.value === value);
      const { sort } = filters;
      if (!option) {
        sort.set(filterOptions.sort[0].value);
        return;
      }
      sort.value = option && option.value;
      sort.title = option && option.title;
    },
  },
};
hookSetting('filters.sort', value => {
  filters.sort.set(value);
});
options.ready(() => {
  filters.sort.set(options.get('filters.sort'));
});

export default {
  components: {
    Item,
    Edit,
    Tooltip,
    SettingCheck,
    LocaleGroup,
    Dropdown,
    Icon,
  },
  data() {
    return {
      store,
      filterOptions,
      filters,
      script: null,
      search: null,
      modal: null,
      menuNewActive: false,
    };
  },
  watch: {
    search: 'updateLater',
    'filters.sort.value': 'updateLater',
    'store.scripts'() {
      this.onUpdate();
      this.onHashChange();
    },
    'store.route.paths.1': 'onHashChange',
  },
  computed: {
    message() {
      if (this.store.loading) {
        return i18n('msgLoading');
      }
      if (!this.store.scripts.length) {
        return i18n('labelNoScripts');
      }
      if (!objectGet(this.store, 'filteredScripts.length')) {
        return i18n('labelNoSearchScripts');
      }
      return null;
    },
  },
  methods: {
    onUpdate() {
      const { search, filters: { sort } } = this;
      const lowerSearch = (search || '').toLowerCase();
      const { scripts } = this.store;
      const filteredScripts = search
        ? scripts.filter(script => script.$cache.search.includes(lowerSearch))
        : scripts.slice();
      if (sort.value === SORT_ALPHA.value) {
        const showEnabledFirst = options.get('filters.showEnabledFirst');
        const getSortKey = item => {
          const keys = [];
          if (showEnabledFirst) {
            keys.push(item.config.enabled ? 0 : 1);
          }
          keys.push(item.$cache.lowerName);
          return keys.join('');
        };
        filteredScripts.sort((a, b) => {
          const nameA = getSortKey(a);
          const nameB = getSortKey(b);
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      } else if (sort.value === SORT_UPDATE.value) {
        const getSortKey = item => +item.props.lastUpdated || 0;
        filteredScripts.sort((a, b) => getSortKey(b) - getSortKey(a));
      }
      this.store.filteredScripts = filteredScripts;
    },
    updateLater() {
      this.debouncedUpdate();
    },
    updateAll() {
      sendMessage({ cmd: 'CheckUpdateAll' });
    },
    installFromURL() {
      new Promise((resolve, reject) => {
        showMessage({
          text: i18n('hintInputURL'),
          onBackdropClick: reject,
          buttons: [
            {
              type: 'submit',
              text: i18n('buttonOK'),
              onClick: resolve,
            },
            {
              text: i18n('buttonCancel'),
              onClick: reject,
            },
          ],
        });
      })
      .then(url => {
        if (url && url.includes('://')) return sendMessage({ cmd: 'ConfirmInstall', data: { url } });
      }, noop)
      .catch(err => {
        if (err) showMessage({ text: err });
      });
    },
    moveScript(data) {
      if (data.from === data.to) return;
      sendMessage({
        cmd: 'Move',
        data: {
          id: this.store.scripts[data.from].props.id,
          offset: data.to - data.from,
        },
      })
      .then(() => {
        const { scripts } = this.store;
        const i = Math.min(data.from, data.to);
        const j = Math.max(data.from, data.to);
        const seq = [
          scripts.slice(0, i),
          scripts.slice(i, j + 1),
          scripts.slice(j + 1),
        ];
        if (i === data.to) {
          seq[1].unshift(seq[1].pop());
        } else {
          seq[1].push(seq[1].shift());
        }
        this.store.scripts = seq.concat.apply([], seq);
      });
    },
    onOrderChange(e) {
      options.set('filters.sort', e.target.value);
    },
    onStateChange(active) {
      this.menuNewActive = active;
    },
    onEditScript(id) {
      setRoute(['scripts', id].filter(Boolean).join('/'), true);
    },
    onHashChange() {
      const id = this.store.route.paths[1];
      if (id === '_new') {
        this.script = {};
      } else {
        const nid = id && +id || null;
        this.script = nid && this.store.scripts.find(script => script.props.id === nid);
      }
    },
  },
  created() {
    this.debouncedUpdate = debounce(this.onUpdate, 200);
    this.onUpdate();
  },
};
</script>

<style>
$header-height: 4rem;

.tab.tab-installed {
  padding: 0;
  > header {
    height: $header-height;
    align-items: center;
    padding: 0 1rem;
    line-height: 1;
    border-bottom: 1px solid darkgray;
  }
  .vl-dropdown-menu {
    white-space: nowrap;
  }
  .vl-dropdown.active .vl-tooltip-wrap {
    display: none;
  }
}
.backdrop,
.scripts {
  position: absolute;
  top: $header-height;
  left: 0;
  right: 0;
  bottom: 0;
}
.scripts {
  overflow-y: auto;
}
.backdrop {
  text-align: center;
  color: gray;
}
.backdrop > *,
.backdrop::after {
  display: inline-block;
  vertical-align: middle;
  font-size: 2rem;
}
.backdrop::after {
  content: ' ';
  width: 0;
  height: 100%;
}
.mask {
  background: rgba(0,0,0,.08);
  /*transition: opacity 1s;*/
}
.dropdown-menu-item {
  display: block;
  width: 100%;
  padding: .5rem;
  text-decoration: none;
  color: #666;
  cursor: pointer;
  &:hover {
    color: inherit;
    background: #fbfbfb;
  }
}
.filter-search {
  position: relative;
  width: 14rem;
  .icon {
    position: absolute;
    height: 100%;
    top: 0;
    right: .5rem;
  }
  > input {
    width: 100%;
    padding-left: .5rem;
    padding-right: 2rem;
    line-height: 2;
  }
}
.filter-sort {
  .vl-dropdown-menu {
    padding: 1rem;
    > * {
      margin-bottom: .5rem;
    }
  }
}
</style>

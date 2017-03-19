import vRate from './rate';
import vMenu from './menu';
import vIcon from './iconfont';
import { vCol, vRow } from './layout';
import vButton from './button';
import vAffix from './affix';
import vBackTop from './backTop';
import vAlert from './alert';
import vBadge from './badge';
import vCollapse from './collapse';
import vCard from './card';
import vDropdown from './dropdown';
import vMessage from './message';
import vModal from './modal';
import vNotification from './notification';
import vPopover from './popover';
import vProgress from './progress';
import vLoadingBar from './loadingBar';
import vSpin from './spin';
import vSwitch from './switch';
import vTag from './tag';
import vTable from './table';
import vTooltip from './tooltip';
import vCheckbox from './checkbox';
import vRadio from './radio';
import vTabs from './tabs';
import vSteps from './steps';
import vTimeline from './timeline';
import vPagination from './pagination';
import vSelect from './select';
import vUpload from './upload';
import vInput from './input';
import vInputNumber from './inputNumber';
import vCascader from './cascader';
import vDatepicker from './datepicker';
import vForm from './form';

let components = {
  vRate,
  vMenu,
  vSubMenu: vMenu.subMenu,
  vMenuItemGroup: vMenu.itemGroup,
  vMenuItem: vMenu.item,
  vIcon,
  vCol,
  vRow,
  vButton,
  vButtonGroup: vButton.group,
  vAffix,
  vBackTop,
  vAlert,
  vBadge,
  vCollapse,
  vPanel: vCollapse.panel,
  vCard,
  vDropdown,
  vDropdownMenu: vDropdown.menu,
  vDropdownItem: vDropdown.item,
  vMessage,
  vModal,
  vNotification,
  vPopover,
  vProgress,
  vLoadingBar,
  vSpin,
  vSwitch,
  vTag,
  vTable,
  vTooltip,
  vCheckbox,
  vCheckboxGroup: vCheckbox.group,
  vRadio,
  vRadioGroup: vRadio.group,
  vTabs,
  vTabPanel: vTabs.panel,
  vSteps,
  vStep: vSteps.step,
  vTimeline,
  vTimelineItem: vTimeline.item,
  vPagination,
  vSelect,
  vOption: vSelect.option,
  vOptionGroup: vSelect.group,
  vUpload,
  vInput,
  vInputNumber,
  vCascader,
  vDatepicker,
  vForm,
  vFormItem: vForm.item
};

Object.values(components).forEach(child => {
  if (!child.install && child.name) {
    child.install = Vue => Vue.component(child.name, child);
  }
});

const install = Vue => {
  if (install.installed) return;
  Object.values(components).forEach(child => {
    child.install && (Vue.use(child));
  });
  Vue.prototype.$message = vMessage;
  Vue.prototype.$modal = vModal;
  Vue.prototype.$notification = vNotification;
  Vue.prototype.$loadingBar = vLoadingBar;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  ...components
};

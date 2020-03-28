import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';
import DiffSettingsModal from "./modals/DiffSettingsModal";

app.initializers.add('the-turk-diff', app => {
  // show extension's settings modal
  app.extensionSettings['the-turk-diff'] = () => app.modal.show(new DiffSettingsModal());

  extend(PermissionGrid.prototype, 'viewItems', items => {
    // who can view edit history?
    items.add('viewEditHistory', {
      icon: 'fas fa-history',
      label: app.translator.trans(
        'the-turk-diff.admin.permissions.viewEditHistory'
      ),
      permission: 'viewEditHistory',
      allowGuest: false
    });
  });

  extend(PermissionGrid.prototype, 'moderateItems', items => {
    // who can delete others edit history?
    items.add('deleteEditHistory', {
      icon: 'fas fa-times',
      label: app.translator.trans(
        'the-turk-diff.admin.permissions.deleteEditHistory'
      ),
      permission: 'deleteEditHistory',
      allowGuest: false
    });
    // who can delete their own edit history?
    items.add('selfDeleteEditHistory', {
      icon: 'fas fa-times',
      label: app.translator.trans(
        'the-turk-diff.admin.permissions.selfDeleteEditHistory'
      ),
      permission: 'selfDeleteEditHistory',
      allowGuest: false
    });

    // who can rollback others edit history?
    items.add('rollbackEditHistory', {
      icon: 'fas fa-history',
      label: app.translator.trans(
        'the-turk-diff.admin.permissions.rollbackEditHistory'
      ),
      permission: 'rollbackEditHistory',
      allowGuest: false
    });
    // who can rollback their own edit history?
    items.add('selfRollbackEditHistory', {
      icon: 'fas fa-history',
      label: app.translator.trans(
        'the-turk-diff.admin.permissions.selfRollbackEditHistory'
      ),
      permission: 'selfRollbackEditHistory',
      allowGuest: false
    });
  });
});

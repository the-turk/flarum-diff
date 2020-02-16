import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';
import DiffSettingsModal from "./modals/DiffSettingsModal";

app.initializers.add('the-turk-diff', app => {
    app.extensionSettings['the-turk-diff'] = () => app.modal.show(new DiffSettingsModal());

    extend(PermissionGrid.prototype, 'viewItems', items => {
        items.add('viewEditHistory', {
            icon: 'fas fa-history',
            label: app.translator.trans('the-turk-diff.admin.permissions.viewEditHistory'),
            permission: 'viewEditHistory',
            allowGuest: false
        });
    });
});

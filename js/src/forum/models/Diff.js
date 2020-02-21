import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Diff extends mixin(Model, {
    revision: Model.attribute('revision'),
    createdAt: Model.attribute('createdAt', Model.transformDate),
    deletedAt: Model.attribute('deletedAt', Model.transformDate),
    actor: Model.hasOne('actor'),
    deletedUser: Model.hasOne('deletedUser'),
    inlineHtml: Model.attribute('inlineHtml'),
    sideBySideHtml: Model.attribute('sideBySideHtml'),
    canDeleteEditHistory: Model.attribute('canDeleteEditHistory')
}) {}

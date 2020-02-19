import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Diff extends mixin(Model, {
    revision: Model.attribute('revision'),
    createdAt: Model.attribute('createdAt', Model.transformDate),
    deletedAt: Model.attribute('deletedAt', Model.transformDate),
    actor: Model.hasOne('actor'),
    deletedUser: Model.hasOne('deletedUser'),
    contentHtml: Model.attribute('contentHtml'),
    canDeleteEditHistory: Model.attribute('canDeleteEditHistory'),
    largeModal: Model.attribute('largeModal')
}) {}

import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Diff extends mixin(Model, {
    revision: Model.attribute('revision'),
    createdAt: Model.attribute('createdAt', Model.transformDate),
    actor: Model.hasOne('actor'),
    contentHtml: Model.attribute('contentHtml'),
    largeModal: Model.attribute('largeModal'),
}) {}

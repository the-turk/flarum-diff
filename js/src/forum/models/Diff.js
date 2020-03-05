import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Diff extends mixin(Model, {
    revision: Model.attribute('revision'),
    createdAt: Model.attribute('createdAt', Model.transformDate),
    deletedAt: Model.attribute('deletedAt', Model.transformDate),
    revertedAt: Model.attribute('revertedAt', Model.transformDate),
    actor: Model.hasOne('actor'),
    deletedUser: Model.hasOne('deletedUser'),
    revertedUser: Model.hasOne('revertedUser'),
    inlineHtml: Model.attribute('inlineHtml'),
    sideBySideHtml: Model.attribute('sideBySideHtml'),
    combinedHtml: Model.attribute('combinedHtml'),
    canDeleteEditHistory: Model.attribute('canDeleteEditHistory'),
    isRevertable: Model.attribute('isRevertable')
}) {}

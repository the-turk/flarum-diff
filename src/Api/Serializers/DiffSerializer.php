<?php
namespace TheTurk\Diff\Api\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use TheTurk\Diff\Models\Diff;

class DiffSerializer extends AbstractSerializer
{
    /**
     * Resource type
     *
     * @var string
     */
    protected $type = 'diff'; //used on line app.store.models.$type

    /**
     * Get the default set of serialized attributes for a model
     *
     * @param Diff $diff
     *
     * @return array
     */
    protected function getDefaultAttributes($diff)
    {
        return [
            'revision'    => (int)$diff->revision,
            'createdAt'   => $this->formatDate($diff->created_at),
            'deletedAt'   => $this->formatDate($diff->deleted_at),
            'revertedAt'  => $this->formatDate($diff->deleted_at),
            'archived'    => (bool)$diff->archived
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\hasOne
     */
    public function actor($diff)
    {
        return $this->hasOne($diff, BasicUserSerializer::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\hasOne
     */
    public function deletedUser($diff)
    {
        return $this->hasOne($diff, BasicUserSerializer::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\hasOne
     */
    public function revertedUser($diff)
    {
        return $this->hasOne($diff, BasicUserSerializer::class);
    }
}

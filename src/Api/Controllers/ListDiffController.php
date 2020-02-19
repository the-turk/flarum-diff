<?php
namespace TheTurk\Diff\Api\Controllers;

use TheTurk\Diff\Api\Serializers\DiffSerializer;
use TheTurk\Diff\DiffRepository;
use Flarum\User\AssertPermissionTrait;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Api\Controller\AbstractListController;

class ListDiffController extends AbstractListController
{
    use AssertPermissionTrait;

    /**
     * {@inheritdoc}
     */
    public $serializer = DiffSerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = ['actor', 'deletedUser'];

    /**
     * @var DiffRepository
     */
    protected $diff;

    /**
     * @param DiffRepository $diff
     */
    public function __construct(DiffRepository $diff)
    {
        $this->diff = $diff;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        $this->assertCan($actor, 'viewEditHistory');

        $postId = array_get($request->getQueryParams(), 'id');

        $include = $this->extractInclude($request);

        $diff = $this->diff->findWhere(
            ['post_id' => $postId],
            ['created_at' => 'DESC']
        )
            ->load($include)
            ->all();

        return $diff;
    }
}

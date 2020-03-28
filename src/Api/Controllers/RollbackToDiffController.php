<?php
namespace TheTurk\Diff\Api\Controllers;

use TheTurk\Diff\Api\Serializers\DiffSerializer;
use TheTurk\Diff\Commands\RollbackToDiff;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Flarum\Api\Controller\AbstractShowController;
use Tobscure\JsonApi\Document;

class RollbackToDiffController extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = DiffSerializer::class;

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        return $this->bus->dispatch(
            new RollbackToDiff(
                $request->getAttribute('actor'),
                Arr::get($request->getQueryParams(), 'id')
                // I could do that but can't rely on this value
                // Arr::get($request->getParsedBody(), 'maxRevisionCount')
            )
        );
    }
}

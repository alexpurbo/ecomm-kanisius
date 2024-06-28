<?php

namespace App\Services\Midtrans;

use Midtrans\Snap;

class CreateSnapTokenService extends Midtrans
{
    protected $order;

    public function __construct()
    {
        parent::__construct();

        // $this->order = $order;
    }

    public function getSnapToken($data)
    {
        $snapToken = Snap::getSnapToken($data);

        return $snapToken;
    }
}

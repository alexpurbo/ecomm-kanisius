<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class PostController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getPromo()
    {
        // $date = Carbon::now()->format('Y-m-d');

        $data = DB::select("SELECT * FROM tb_post WHERE postID LIKE '3%' AND DATE(NOW()) BETWEEN postTanggal1 AND postTanggal2");

        return $data;
    }

    public function getCategoryFirst()
    {
        $data = DB::table('ref_kategori')->where('katLevel', '1')->select('*')->get();
        return response()->json(['data' => $data]);
    }

    public function getProvinceData()
    {
        $apiKey = config('services.rajaongkir.key');

        $response = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/province');
        $posts = $response->json();

        return $posts;
    }

    public function getProvinceDataOption()
    {
        $apiKey = config('services.rajaongkir.key');

        $response = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/province');
        // ->get('https://api.rajaongkir.com/starter/province');
        $posts = $response->json();


        foreach ($posts->rajaongkir->results as $data) {
            $fixData[] = [
                'value' => $data->province_id,
                'label' => $data->province
            ];
        }

        return $fixData->json();
    }

    public function getCityByProvinceId($id)
    {
        $apiKey = config('services.rajaongkir.key');

        $response = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/city', ['province' => $id]);
        $posts = $response->json();

        return $posts;
    }

    public function getSubdistrictData($id)
    {
        $apiKey = config('services.rajaongkir.key');

        $response = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/subdistrict', ['city' => $id]);
        $posts = $response->json();

        return $posts;
    }

    public function getCourierOptionByOriginAndDestination(Request $request)
    {
        $apiKey = config('services.rajaongkir.key');

        $response = Http::withHeaders(['key' => $apiKey])
            ->post(
                'https://pro.rajaongkir.com/api/cost',
                [
                    'origin' => '5781',
                    'destination' => $request->destination,
                    'weight' => $request->weight,
                    'courier' => 'jne:pos:tiki',
                    'originType' => 'subdistrict',
                    'destinationType' => 'subdistrict'
                    // 	https://pro.rajaongkir.com/api/cost
                ]
            );
        $posts = $response->json();

        return $posts;
    }
}

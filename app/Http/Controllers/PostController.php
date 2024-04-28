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
        // $response = Http::get('https://api.rajaongkir.com/starter/province?key=7335611ba24c5e032e10fe8cde45f910');

        // $response = Http::withHeaders(['key' => '7335611ba24c5e032e10fe8cde45f910'])
        //     ->get('https://api.rajaongkir.com/starter/province', ['id' => '12']);

        $response = Http::withHeaders(['key' => '7335611ba24c5e032e10fe8cde45f910'])
            ->get('https://api.rajaongkir.com/starter/province');
        $posts = $response->json();

        return $posts;

        // foreach ($response as $data) {
        //     $fixData[] = [
        //         'value' => $data->province_id,
        //         'label' => $data->province
        //     ];
        // }

        // return $fixData->json();
    }

    public function getProvinceDataOption()
    {
        // $response = Http::get('https://api.rajaongkir.com/starter/province?key=7335611ba24c5e032e10fe8cde45f910');

        // $response = Http::withHeaders(['key' => '7335611ba24c5e032e10fe8cde45f910'])
        //     ->get('https://api.rajaongkir.com/starter/province', ['id' => '12']);

        $response = Http::withHeaders(['key' => '7335611ba24c5e032e10fe8cde45f910'])
            ->get('https://api.rajaongkir.com/starter/province');
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
        $response = Http::withHeaders(['key' => '7335611ba24c5e032e10fe8cde45f910'])
            ->get('https://api.rajaongkir.com/starter/city', ['province' => $id]);
        $posts = $response->json();

        return $posts;
    }

    public function getCourierOptionByOriginAndDestination()
    {
        $response = Http::withHeaders(['key' => '7335611ba24c5e032e10fe8cde45f910'])
            ->post(
                'https://api.rajaongkir.com/starter/cost',
                [
                    'origin' => '501',
                    'destination' => '114',
                    'weight' => '1700',
                    'courier' => 'jne'
                ]
            );
        $posts = $response->json();

        return $posts;
    }
}

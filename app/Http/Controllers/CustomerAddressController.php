<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddressRequest;
use App\Models\CustomerAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CustomerAddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // return $request;
        $user = $request->user();
        $data = CustomerAddress::where('alamat_customer', $user->C_ID)->get();

        $apiKey = config('services.rajaongkir.key');

        $province = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/province', ['id' => $data[0]->alamat_provinsi]);

        $data[0]['province'] = $province['rajaongkir']['results']['province'];

        $city = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/city', ['id' => $data[0]->alamat_city]);

        $data[0]['city'] = $city['rajaongkir']['results']['city_name'];

        $subdistrict = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/subdistrict', ['city' => $data[0]->alamat_city, 'id' => $data[0]->alamat_subdistrict]);

        $data[0]['subdistrict'] = $subdistrict['rajaongkir']['results']['subdistrict_name'];

        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddressRequest $request)
    {
        $data = $request->validated();

        $address = CustomerAddress::create([
            'alamat_customer' => $data['cust_id'],
            'alamat_provinsi' => $data['province'],
            'alamat_city' => $data['city'],
            'alamat_lengkap' => $data['address'],
            'alamat_hp' => $data['handphone'],
            'alamat_penerima' => $data['name'],
            'alamat_subdistrict' => $data['subdistrict'],
            'alamat_tipe' => 'lain'
        ]);

        return response([
            'user' => $address
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CustomerAddress  $customerAddress
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // return $id;
        $data = CustomerAddress::where('alamat_customer', $id)->get();

        $apiKey = config('services.rajaongkir.key');

        $province = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/province', ['id' => $data[0]->alamat_provinsi]);

        $data[0]['province'] = $province['rajaongkir']['results']['province'];

        $city = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/city', ['id' => $data[0]->alamat_city]);

        $data[0]['city'] = $city['rajaongkir']['results']['city_name'];

        $subdistrict = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/subdistrict', ['city' => $data[0]->alamat_city, 'id' => $data[0]->alamat_subdistrict]);

        $data[0]['subdistrict'] = $subdistrict['rajaongkir']['results']['subdistrict_name'];

        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CustomerAddress  $customerAddress
     * @return \Illuminate\Http\Response
     */
    public function edit(CustomerAddress $customerAddress)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CustomerAddress  $customerAddress
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CustomerAddress $customerAddress)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CustomerAddress  $customerAddress
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomerAddress $customerAddress)
    {
        //
    }

    public function getProvinceDetailById($id)
    {
        $apiKey = config('services.rajaongkir.key');

        $response = Http::withHeaders(['key' => $apiKey])
            ->get('https://pro.rajaongkir.com/api/province', ['id' => $id]);
        $posts = $response->json();

        return $posts;
    }
}

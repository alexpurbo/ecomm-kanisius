import React from "react";
import PageComponent from "../components/PageComponent";

export default function CaraBelanja() {
    return (
        <div>
            <PageComponent>
                <div className="w-full pt-28 md:pt-32 bg-blue-950 h-44">
                    <div className="relative h-full w-full">
                        <div className="absolute md:inset-x-24 inset-x-4 py-2 md:px-8 px-4 bg-slate-50 mx-auto -bottom-3 rounded-lg shadow-lg">
                            <p className="md:font-medium font-light md:text-lg text-sm">
                                Cara Belanja
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl mt-8 px-8 flex flex-col">
                        <div className=""></div>
                    </div>
                </div>
            </PageComponent>
        </div>
    );
}

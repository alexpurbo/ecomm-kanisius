import React from "react";

export default function PaginationLinks({ meta, onPageClick }) {
    // console.log(meta);
    function onClick(ev, link) {
        ev.preventDefault();
        if (!link.url) {
            return;
        }
        onPageClick(link);
    }

    return (
        <div className="flex items-center justify-between border-t border-blue-950 bg-white px-4 py-3 sm:px-6 shadow-md mt-4">
            {/* Small Screen Pagination */}
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    onClick={(ev) => onClick(ev, meta.links[0])}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    onClick={(ev) =>
                        onClick(ev, meta.links[meta.links.length - 1])
                    }
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            {/* End Small Screen Pagination */}

            <div className="hidden sm:flex-col sm:flex sm:flex-1 sm:items-center sm:justify-between">
                {/* Left data */}
                <div className="flex items-center justify-end w-full">
                    <p className="font-semibold text-sm text-slate-500">
                        Menampilkan {meta.from} sampai {meta.to} produk dari
                        total {meta.total} produk
                    </p>
                </div>
                {/* End Left Data */}

                {/* Right Data */}
                <div className="mt-2 flex items-center justify-end w-full">
                    {meta.total >= 20 && (
                        <nav
                            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                            aria-label="Pagination"
                        >
                            {/* Left Prev */}

                            {/* Left Prev End */}

                            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

                            {meta.links &&
                                meta.links.map((link, ind) => (
                                    <a
                                        href="#"
                                        onClick={(ev) => onClick(ev, link)}
                                        aria-current="page"
                                        className={
                                            "relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20 hover:bg-gray-50 " +
                                            (ind === 0 ? "rounded-l-md " : "") +
                                            (ind === meta.links.length - 1
                                                ? "rounded-r-md "
                                                : "") +
                                            (link.active
                                                ? "border-indigo-500 z-30 bg-indigo-50 text-indigo-600 "
                                                : "")
                                            // "relative z-10 inline-flex items-center  border border-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        }
                                        key={ind}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    ></a>
                                ))}
                            {/* End Right Next */}
                        </nav>
                    )}
                </div>
                {/* End Right Data */}
            </div>
        </div>
    );
}

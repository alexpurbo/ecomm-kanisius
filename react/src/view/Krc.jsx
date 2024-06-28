import React, { useEffect } from "react";
import PageComponent from "../components/PageComponent";
import BreadcrumbTitle from "../components/BreadcrumbTitle";
import { useStateContext } from "../contexts/ContextProvider";

export default function Krc() {
    const { setUrlPathname } = useStateContext();

    useEffect(() => {
        setUrlPathname("/krc");
    }, []);

    return (
        <div>
            <PageComponent>
                <BreadcrumbTitle title={"KRC"} />
            </PageComponent>
        </div>
    );
}

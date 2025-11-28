import React from 'react';
import { LoadingIndicator } from "@/components/application/loading-indicator/loading-indicator";

const Loader = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <LoadingIndicator type="dot-circle" size="md" label="Loading..." />
        </div>
    );
};

export default Loader;
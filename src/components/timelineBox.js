import * as React from "react";
import '../styles/timeline.scss';

const TimelineBox = ({ header, type, children }) => {
    const className = `timeline-box-${type}`;

    return (
        <div className={className}>
            <div className="timeline-box-content">
                <h1>{header}</h1>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default TimelineBox;
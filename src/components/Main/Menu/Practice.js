import React from "react";
import { motion } from "framer-motion";
import PageTitle from "./PageTitle";

export default function Practice() {
    return (
        <motion.div
            id="practice-page"
            initial={{ left: "100%", transitionDuration: "0.1s" }}
            animate={{ left: 0 }}
            exit={{ left: "100%", transitionDuration: "0.01s" }}
        >
            <PageTitle pageName="Practice" />
            <div className="practice-main">
                <div className="practice-header">
                    <h4 className="practice-header-title">Practice areas</h4>
                    <p className="practice-header-info">
                        Quisque pellentesque dui quis risus fringilla condimentum. Etiam sit
                        amet rhoncus magna. Cras luctus feugiat ligula et consectetur. Nam
                        scelerisque rhoncus ligula, aliquet pulvinar justo ultrices vel.
                        Aenean et sagittis risus. Proin vel diam in enim placerat ornare.
                    </p>
                </div>
                <div className="practice-list">
                    <div className="practice-list-item">
                        <h6 className="practice-item-title">
                            Vestibulum euismod condimentum
                        </h6>
                        <p className="practice-item-info">
                            Aliquam erat volutpat. Sed non erat turpis. Donec eu lacus et
                            purus auctor mattis at id massa. Nulla viv placerat sollicitudin.
                            Nunc sed orci risus lacus
                        </p>
                    </div>
                    <div className="practice-list-item">
                        <h6 className="practice-item-title">
                            Vestibulum euismod condimentum
                        </h6>
                        <p className="practice-item-info">
                            Aliquam erat volutpat. Sed non erat turpis. Donec eu lacus et
                            purus auctor mattis at id massa. Nulla viv placerat sollicitudin.
                            Nunc sed orci risus lacus
                        </p>
                    </div>
                    <div className="practice-list-item">
                        <h6 className="practice-item-title">
                            Vestibulum euismod condimentum
                        </h6>
                        <p className="practice-item-info">
                            Aliquam erat volutpat. Sed non erat turpis. Donec eu lacus et
                            purus auctor mattis at id massa. Nulla viv placerat sollicitudin.
                            Nunc sed orci risus lacus
                        </p>
                    </div>
                    <div className="practice-list-item">
                        <h6 className="practice-item-title">
                            Vestibulum euismod condimentum
                        </h6>
                        <p className="practice-item-info">
                            Aliquam erat volutpat. Sed non erat turpis. Donec eu lacus et
                            purus auctor mattis at id massa. Nulla viv placerat sollicitudin.
                            Nunc sed orci risus lacus
                        </p>
                    </div>
                    <div className="practice-list-item">
                        <h6 className="practice-item-title">
                            Vestibulum euismod condimentum
                        </h6>
                        <p className="practice-item-info">
                            Aliquam erat volutpat. Sed non erat turpis. Donec eu lacus et
                            purus auctor mattis at id massa. Nulla viv placerat sollicitudin.
                            Nunc sed orci risus lacus
                        </p>
                    </div>
                    <div className="practice-list-item">
                        <h6 className="practice-item-title">
                            Vestibulum euismod condimentum
                        </h6>
                        <p className="practice-item-info">
                            Aliquam erat volutpat. Sed non erat turpis. Donec eu lacus et
                            purus auctor mattis at id massa. Nulla viv placerat sollicitudin.
                            Nunc sed orci risus lacus
                        </p>
                    </div>
                    <div className="practice-list-item">
                        <h6 className="practice-item-title">
                            Vestibulum euismod condimentum
                        </h6>
                        <p className="practice-item-info">
                            Aliquam erat volutpat. Sed non erat turpis. Donec eu lacus et
                            purus auctor mattis at id massa. Nulla viv placerat sollicitudin.
                            Nunc sed orci risus lacus
                        </p>
                    </div>
                    <div className="practice-list-item">
                        <h6 className="practice-item-title">
                            Vestibulum euismod condimentum
                        </h6>
                        <p className="practice-item-info">
                            Aliquam erat volutpat. Sed non erat turpis. Donec eu lacus et
                            purus auctor mattis at id massa. Nulla viv placerat sollicitudin.
                            Nunc sed orci risus lacus
                        </p>
                    </div>
                    <div className="practice-list-item">
                        <h6 className="practice-item-title">
                            Vestibulum euismod condimentum
                        </h6>
                        <p className="practice-item-info">
                            Aliquam erat volutpat. Sed non erat turpis. Donec eu lacus et
                            purus auctor mattis at id massa. Nulla viv placerat sollicitudin.
                            Nunc sed orci risus lacus
                        </p>
                    </div>
                    <div className="practice-list-item">
                        <h6 className="practice-item-title">
                            Vestibulum euismod condimentum
                        </h6>
                        <p className="practice-item-info">
                            Aliquam erat volutpat. Sed non erat turpis. Donec eu lacus et
                            purus auctor mattis at id massa. Nulla viv placerat sollicitudin.
                            Nunc sed orci risus lacus
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

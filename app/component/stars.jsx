"use client";
import { Fragment } from "react";
import $ from "jquery";

export default function Stars ({ rate }) {

    return (

        <Fragment>

            <div className="stars-div">

                <i className={rate < 1 ? rate <= 0 ? 'fa fa-star-o' : 'fa fa-star-half-full' : 'fa fa-star'}></i>
                <i className={rate < 2 ? rate <= 1 ? 'fa fa-star-o' : 'fa fa-star-half-full' : 'fa fa-star'}></i>
                <i className={rate < 3 ? rate <= 2 ? 'fa fa-star-o' : 'fa fa-star-half-full' : 'fa fa-star'}></i>
                <i className={rate < 4 ? rate <= 3 ? 'fa fa-star-o' : 'fa fa-star-half-full' : 'fa fa-star'}></i>
                <i className={rate < 5 ? rate <= 4 ? 'fa fa-star-o' : 'fa fa-star-half-full' : 'fa fa-star'}></i>

            </div>

        </Fragment>

    )

}

import React from 'react';
import styles from './Logo.module.css'

export const Logo = () => {

    return(
        <div className={styles.Logo}>
            <div>
                <svg id="Outline" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m168 320a152.935 152.935 0 0 0 26.281-2.285 152.35 152.35 0 0 0 -2.281 26.285c0 83.813 68.187 152 152 152s152-68.187 152-152-68.187-152-152-152a152.35 152.35 0 0 0 -26.285 2.281 152.918 152.918 0 0 0 2.285-26.281c0-83.813-68.187-152-152-152s-152 68.187-152 152 68.187 152 152 152zm176-112c74.99 0 136 61.009 136 136s-61.01 136-136 136-136-61.009-136-136 61.01-136 136-136zm-176 64a104.005 104.005 0 1 1 91.26-54.128 153.253 153.253 0 0 0 -41.388 41.388 103.937 103.937 0 0 1 -49.872 12.74zm0-240c74.99 0 136 61.009 136 136a136.446 136.446 0 0 1 -3.395 30.322 150.776 150.776 0 0 0 -18.514 6.869 120 120 0 1 0 -76.9 76.9 150.776 150.776 0 0 0 -6.869 18.514 136.473 136.473 0 0 1 -30.322 3.395c-74.99 0-136-61.009-136-136s61.01-136 136-136z"/><circle cx="168" cy="88" r="8"/><circle cx="232" cy="120" r="8"/><circle cx="104" cy="120" r="8"/><circle cx="136" cy="248" r="8"/><circle cx="200" cy="248" r="8"/><circle cx="248" cy="184" r="8"/><circle cx="88" cy="184" r="8"/><path d="m168 128a40 40 0 1 0 40 40 40.045 40.045 0 0 0 -40-40zm0 64a24 24 0 1 1 24-24 24.028 24.028 0 0 1 -24 24z"/><path d="m240.5 301.129c-1.71 4.123-5.49 8.553-9.493 13.241-7.033 8.24-15 17.58-15 29.63s7.972 21.39 15.006 29.63c4 4.688 7.782 9.117 9.492 13.241 1.845 4.448 2.357 10.473 2.9 16.852.9 10.6 1.926 22.62 10.091 30.786s20.185 9.19 30.788 10.093c6.379.543 12.405 1.055 16.852 2.9 4.124 1.711 8.553 5.491 13.241 9.493 8.233 7.033 17.572 15.005 29.623 15.005s21.39-7.972 29.63-15.006c4.688-4 9.117-7.782 13.241-9.493 4.447-1.844 10.473-2.356 16.851-2.9 10.6-.9 22.622-1.926 30.788-10.092s9.188-20.184 10.092-30.787c.543-6.379 1.055-12.4 2.9-16.852 1.71-4.123 5.49-8.553 9.493-13.241 7.033-8.24 15-17.58 15-29.63s-7.972-21.39-15.006-29.63c-4-4.688-7.782-9.117-9.492-13.241-1.845-4.448-2.357-10.473-2.9-16.852-.9-10.6-1.926-22.62-10.091-30.786s-20.185-9.19-30.788-10.093c-6.379-.543-12.405-1.055-16.852-2.9-4.124-1.711-8.553-5.491-13.241-9.493-8.235-7.032-17.574-15.004-29.625-15.004s-21.39 7.972-29.63 15.006c-4.688 4-9.117 7.782-13.241 9.493-4.447 1.844-10.473 2.356-16.851 2.9-10.6.9-22.622 1.926-30.788 10.092s-9.19 20.183-10.09 30.786c-.545 6.379-1.057 12.404-2.9 16.852zm14.779 6.128c2.8-6.743 3.441-14.307 4.064-21.622.735-8.639 1.43-16.8 5.464-20.831s12.192-4.728 20.83-5.463c7.315-.623 14.88-1.267 21.623-4.063 6.459-2.679 12.072-7.469 17.5-12.1 6.73-5.75 13.09-11.178 19.24-11.178s12.51 5.428 19.242 11.175c5.428 4.634 11.041 9.424 17.5 12.1 6.743 2.8 14.308 3.44 21.623 4.063 8.639.735 16.8 1.43 20.831 5.463s4.728 12.192 5.463 20.83c.623 7.316 1.267 14.88 4.064 21.624 2.678 6.459 7.468 12.072 12.1 17.5 5.749 6.735 11.177 13.095 11.177 19.245s-5.428 12.51-11.175 19.242c-4.633 5.428-9.424 11.041-12.1 17.5-2.8 6.743-3.441 14.307-4.064 21.622-.735 8.639-1.43 16.8-5.464 20.831s-12.192 4.728-20.83 5.463c-7.315.623-14.88 1.267-21.623 4.063-6.459 2.679-12.072 7.469-17.5 12.1-6.734 5.751-13.094 11.179-19.244 11.179s-12.51-5.428-19.242-11.175c-5.428-4.634-11.041-9.424-17.5-12.1-6.743-2.8-14.308-3.44-21.623-4.063-8.639-.735-16.8-1.43-20.831-5.463s-4.728-12.192-5.463-20.83c-.623-7.316-1.267-14.88-4.064-21.624-2.678-6.459-7.468-12.072-12.1-17.5-5.749-6.735-11.177-13.095-11.177-19.245s5.428-12.51 11.175-19.242c4.633-5.428 9.425-11.041 12.102-17.501z"/><path d="m344 384a40 40 0 1 0 -40-40 40.045 40.045 0 0 0 40 40zm0-64a24 24 0 1 1 -24 24 24.028 24.028 0 0 1 24-24z"/><path d="m328 288a8 8 0 0 0 8-8v-16a8 8 0 0 0 -16 0v16a8 8 0 0 0 8 8z"/><path d="m274.343 349.657a8 8 0 0 0 11.314-11.314l-16-16a8 8 0 0 0 -11.314 11.314z"/><path d="m370.343 394.343-16 16a8 8 0 0 0 11.314 11.314l16-16a8 8 0 0 0 -11.314-11.314z"/><path d="m400 360a8 8 0 0 0 8 8h16a8 8 0 0 0 0-16h-16a8 8 0 0 0 -8 8z"/><path d="m274.343 413.657a8 8 0 0 0 11.314 0l16-16a8 8 0 0 0 -11.314-11.314l-16 16a8 8 0 0 0 0 11.314z"/><path d="m402.343 317.657a8 8 0 0 0 11.314-11.314l-16-16a8 8 0 0 0 -11.314 11.314z"/></svg>
            </div>
            <div className={styles.Logo__name}>
                <p>Donutio</p>
            </div>
        </div>
    )
}
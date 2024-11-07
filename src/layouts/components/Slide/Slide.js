import classNames from 'classnames/bind';
import { Carousel } from 'rsuite';
import 'rsuite/Carousel/styles/index.css';

import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

export default function Slider() {
    return (
        <>
            <Carousel
                placement="bottom"
                shape="bar"
                className="custom-slider"
                autoplay
                autoplayInterval={2000}
                style={{ height: '500px' }}
            >
                <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/quoc-te-phu-nu-201024.jpg" />
                <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/quoc-te-phu-nu-201024.jpg" />
                <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/quoc-te-phu-nu-201024.jpg" />
                <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/quoc-te-phu-nu-201024.jpg" />
                <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/quoc-te-phu-nu-201024.jpg" />
            </Carousel>
            <div style={{ backgroundColor: '#e6e6e6', position: 'relative' }} className={cx('row', 'no-gutters')}>
                <div className={cx('pc-12')}>
                    <div className={cx('header-links')}>
                        <div className={cx('container')}>
                            <div className={cx('item-outer-item')}>
                                <div className={cx('menuItem')}>
                                    <a href="#">
                                        <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/menu/document.png" />
                                        <span>Văn bản pháp quy</span>
                                        <ul className={cx('sub-menu', 'level-3')}>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className={cx('item-outer-item')}>
                                <div className={cx('menuItem')}>
                                    <a href="#">
                                        <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/menu/support.png" />
                                        <span>Dịch vụ trực tuyến</span>
                                        <ul className={cx('sub-menu', 'level-2')}>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className={cx('item-outer-item')}>
                                <div className={cx('menuItem')}>
                                    <a href="#">
                                        <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/menu/email_20210317092329.png" />
                                        <span>Hỗ trợ CNTT</span>
                                        <ul className={cx('sub-menu', 'level-1')}>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className={cx('item-outer-item')}>
                                <div className={cx('menuItem')}>
                                    <a href="#">
                                        <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/menu/users_20210317092612.png" />
                                        <span>Đảng - Đoàn thể</span>
                                        <ul className={cx('sub-menu', 'level-2')}>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className={cx('item-outer-item')}>
                                <div className={cx('menuItem')}>
                                    <a href="#">
                                        <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/menu/new.gif" />
                                        <span>Virtual Tour</span>
                                        <ul className={cx('sub-menu', 'level-2')}>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className={cx('item-outer-item')}>
                                <div className={cx('menuItem')}>
                                    <a href="#">
                                        <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/menu/iconlichcongtac.png" />
                                        <span>Lịch công tác</span>
                                        <ul className={cx('sub-menu', 'level-2')}>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                            <li>
                                                <a href="#">Khoa Công nghệ thông tin</a>
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

export default function HomeContent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={cx('row', 'no-gutters')}>
            <div className={cx('pc-12')}>
                <div className={cx('container')}>
                    <div className={cx('section-title')}>
                        <h2>Tin tức - Thông báo</h2>
                        <div className={cx('section-description')}>
                            Tin tức mới nhất về các hoạt động của Trường Đại học Phenikaa
                        </div>
                    </div>
                    <div className={cx('section-content')}>
                        <div className={cx('row', 'no-gutters', 'widget-news-items')}>
                            <div
                                className={cx('pc-12')}
                                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
                            >
                                <div className={cx('pc-5-5')}>
                                    <div className={cx('news-item')}>
                                        <div className={cx('pc-5-5')}>
                                            <div className={cx('post_img')}>
                                                <a href="#">
                                                    <img
                                                        src="https://phenikaa-uni.edu.vn:3600/pu/vi/posts/dsc5173-enhanced-nr.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <div className={cx('meta5')}>
                                                    <div className={cx('day')}>29</div>
                                                    <div className={cx('month')}>tháng 10</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('pc-6')}>
                                            <div className={cx('post-texts')}>
                                                <div className={cx('post-title-meta')}>
                                                    <div className={cx('post-title')}>
                                                        <h5>
                                                            <a href="/tets">
                                                                Sinh viên Phenikaa vào Chung kết cuộc thi Phóng viên trẻ
                                                                Pháp ngữ 2024
                                                            </a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className={cx('post-description')}>
                                                    Tháng 8/2024, cuộc thi Phóng viên trẻ Pháp ngữ (Jeunes Reporters
                                                    Francophones) lần thứ 9 do báo Le Courrier du Vietnam (Thông tấn xã
                                                    Việt Nam) tổ chức đã thu hút hàng trăm bài dự thi từ các thí sinh
                                                    trong và ngoài nước. Đáng chú ý, trong lần đầu tham gia, sinh viên
                                                    Khoa tiếng Pháp - Trường Đại học Phenikaa đã có 3 bài viết xuất sắc
                                                    lọt vào vòng Chung kết.
                                                </div>
                                            </div>
                                            <div className={cx('post-link')}>
                                                <a className={cx('btn-read-more')} href="#">
                                                    Xem thêm
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('pc-5-5')}>
                                    <div className={cx('news-item')}>
                                        <div className={cx('pc-5-5')}>
                                            <div className={cx('post_img')}>
                                                <a href="#">
                                                    <img
                                                        src="https://phenikaa-uni.edu.vn:3600/pu/vi/posts/dsc5173-enhanced-nr.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <div className={cx('meta5')}>
                                                    <div className={cx('day')}>29</div>
                                                    <div className={cx('month')}>tháng 10</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('pc-6')}>
                                            <div className={cx('post-texts')}>
                                                <div className={cx('post-title-meta')}>
                                                    <div className={cx('post-title')}>
                                                        <h5>
                                                            <a href="/tets">
                                                                Sinh viên Phenikaa vào Chung kết cuộc thi Phóng viên trẻ
                                                                Pháp ngữ 2024
                                                            </a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className={cx('post-description')}>
                                                    Tháng 8/2024, cuộc thi Phóng viên trẻ Pháp ngữ (Jeunes Reporters
                                                    Francophones) lần thứ 9 do báo Le Courrier du Vietnam (Thông tấn xã
                                                    Việt Nam) tổ chức đã thu hút hàng trăm bài dự thi từ các thí sinh
                                                    trong và ngoài nước. Đáng chú ý, trong lần đầu tham gia, sinh viên
                                                    Khoa tiếng Pháp - Trường Đại học Phenikaa đã có 3 bài viết xuất sắc
                                                    lọt vào vòng Chung kết.
                                                </div>
                                            </div>
                                            <div className={cx('post-link')}>
                                                <a className={cx('btn-read-more')} href="#">
                                                    Xem thêm
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('pc-5-5')}>
                                    <div className={cx('news-item')}>
                                        <div className={cx('pc-5-5')}>
                                            <div className={cx('post_img')}>
                                                <a href="#">
                                                    <img
                                                        src="https://phenikaa-uni.edu.vn:3600/pu/vi/posts/dsc5173-enhanced-nr.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <div className={cx('meta5')}>
                                                    <div className={cx('day')}>29</div>
                                                    <div className={cx('month')}>tháng 10</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('pc-6')}>
                                            <div className={cx('post-texts')}>
                                                <div className={cx('post-title-meta')}>
                                                    <div className={cx('post-title')}>
                                                        <h5>
                                                            <a href="/tets">
                                                                Sinh viên Phenikaa vào Chung kết cuộc thi Phóng viên trẻ
                                                                Pháp ngữ 2024
                                                            </a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className={cx('post-description')}>
                                                    Tháng 8/2024, cuộc thi Phóng viên trẻ Pháp ngữ (Jeunes Reporters
                                                    Francophones) lần thứ 9 do báo Le Courrier du Vietnam (Thông tấn xã
                                                    Việt Nam) tổ chức đã thu hút hàng trăm bài dự thi từ các thí sinh
                                                    trong và ngoài nước. Đáng chú ý, trong lần đầu tham gia, sinh viên
                                                    Khoa tiếng Pháp - Trường Đại học Phenikaa đã có 3 bài viết xuất sắc
                                                    lọt vào vòng Chung kết.
                                                </div>
                                            </div>
                                            <div className={cx('post-link')}>
                                                <a className={cx('btn-read-more')} href="#">
                                                    Xem thêm
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('pc-12', 'btn-more')}>
                                <a className={cx('btn-section-more')} href="#">
                                    Xem Thêm
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('pc-12')}>
                <div className={cx('container')}>
                    <div className={cx('section-title')}>
                        <h2>Tin Tuyển sinh</h2>
                        <div className={cx('section-description')}>
                            Danh sách thông tin tuyển sinh mới nhất của Trường Đại học
                        </div>
                    </div>
                    <div className={cx('tuyen_sinh')}>
                        <div className={cx('row', 'no-gutters', 'widget-news-items')}>
                            <div
                                className={cx('pc-12')}
                                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
                            >
                                <div className={cx('pc-5-5')}>
                                    <div className={cx('news-item')}>
                                        <div className={cx('post-img')}>
                                            <img
                                                src="https://phenikaa-uni.edu.vn:3600/pu/vi/posts/dsc5173-enhanced-nr.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx('post-text')}>
                                            <h4>
                                                <a href="#">
                                                    Trường Đại học Phenikaa công bố điểm chuẩn đại học hệ chính quy và
                                                    hướng dẫn tra cứu kết quả xét tuyển 2024
                                                </a>
                                            </h4>
                                            <div className={cx('meta5')}>
                                                <a href="#">19, tháng 8, 2024</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('pc-5-5')}>
                                    <div className={cx('double-item')}>
                                        <div className={cx('pc-5-5', 'double_item_img')}>
                                            <div className={cx('post_img')}>
                                                <a href="#">
                                                    <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/posts/thumbnail-diem-chuan-dot-2-03.jpg" />
                                                </a>
                                            </div>
                                            <div className={cx('blog-content')}>
                                                <h5>
                                                    <a href="#">
                                                        Trường Đại học Phenikaa nhận hồ sơ xét tuyển bổ sung đại học
                                                        chính quy năm 2024
                                                    </a>
                                                </h5>
                                                <p className={cx('meta5')}>
                                                    <a href="#">19, tháng 8, 2024</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={cx('pc-5-5', 'double_item_img')}>
                                            <div className={cx('post_img')}>
                                                <a href="#">
                                                    <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/posts/thumbnail-diem-chuan-dot-2-03.jpg" />
                                                </a>
                                            </div>
                                            <div className={cx('blog-content')}>
                                                <h5>
                                                    <a href="#">
                                                        Trường Đại học Phenikaa nhận hồ sơ xét tuyển bổ sung đại học
                                                        chính quy năm 2024
                                                    </a>
                                                </h5>
                                                <p className={cx('meta5')}>
                                                    <a href="#">19, tháng 8, 2024</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('pc-5-5')}>
                                    <div className={cx('double-item')}>
                                        <div className={cx('pc-5-5', 'double_item_img')}>
                                            <div className={cx('post_img')}>
                                                <a href="#">
                                                    <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/posts/thumbnail-diem-chuan-dot-2-03.jpg" />
                                                </a>
                                            </div>
                                            <div className={cx('blog-content')}>
                                                <h5>
                                                    <a href="#">
                                                        Trường Đại học Phenikaa nhận hồ sơ xét tuyển bổ sung đại học
                                                        chính quy năm 2024
                                                    </a>
                                                </h5>
                                                <p className={cx('meta5')}>
                                                    <a href="#">19, tháng 8, 2024</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={cx('pc-5-5', 'double_item_img')}>
                                            <div className={cx('post_img')}>
                                                <a href="#">
                                                    <img src="https://phenikaa-uni.edu.vn:3600/pu/vi/posts/thumbnail-diem-chuan-dot-2-03.jpg" />
                                                </a>
                                            </div>
                                            <div className={cx('blog-content')}>
                                                <h5>
                                                    <a href="#">
                                                        Trường Đại học Phenikaa nhận hồ sơ xét tuyển bổ sung đại học
                                                        chính quy năm 2024
                                                    </a>
                                                </h5>
                                                <p className={cx('meta5')}>
                                                    <a href="#">19, tháng 8, 2024</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('pc-5-5')}>
                                    <div className={cx('news-item')}>
                                        <div className={cx('post-img')}>
                                            <img
                                                src="https://phenikaa-uni.edu.vn:3600/pu/vi/posts/dsc5173-enhanced-nr.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx('post-text')}>
                                            <h4>
                                                <a href="#">
                                                    Trường Đại học Phenikaa công bố điểm chuẩn đại học hệ chính quy và
                                                    hướng dẫn tra cứu kết quả xét tuyển 2024
                                                </a>
                                            </h4>
                                            <div className={cx('meta5')}>
                                                <a href="#">19, tháng 8, 2024</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('pc-12', 'btn-more')}>
                                <a className={cx('btn-section-more')} href="#">
                                    Xem Thêm
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

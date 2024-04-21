import MainSampleImage from '../assets/main-sample.svg';
import MainLogo from '../assets/header-logo.png';
import MainTeamValue from '../assets/main-team-value.png';
import MainServiceSample from '../assets/main-service-sample.svg';
import MainService from '../assets/main-service.png';
import MemberImage1 from '../assets/member-1.jpeg';
import MemberImage2 from '../assets/member-2.jpeg';
import MemberImage3 from '../assets/member-3.jpeg';
import MemberImage4 from '../assets/member-4.png';
import MemberImage5 from '../assets/member-5.jpeg';

const Main = () => {
    return (
        <main className="flex flex-col min-w-[1000px] overflow-x-auto">
            <div className="TeamValue flex flex-row min-h-screen px-24 items-center justify-center bg-purple-50 gap-24">
                <div className="flex-col">
                    <h1 className="text-4xl font-bold break-keep">온라인 유저에게 표현의 가치를 제공합니다.</h1>
                    <h1 className="text-xl font-bold text-gray-700 mt-6">반익명 커뮤니티를 시작으로, 메타버스 혁신에 앞장서겠습니다.</h1>
                </div>
                <img className="min-w-[300px] flex w-1/3" src={MainLogo} alt="Main Image"/>
            </div>

            <div className="ServiceIntroduction flex flex-col overflow-x-auto min-h-screen items-center justify-center w-full">
                <img className="min-w-[800px] max-h-screen overflow-x-scroll" src={MainService} alt="Main Service"/>
                {/*<div className="w-full flex aspect-w-13 aspect-h-1">*/}

                {/*</div>*/}
                {/*<div className="flex flex-col flex-grow items-start w-full justify-center gap-6">*/}
                {/*    <div className="flex flex-col items-start px-36">*/}
                {/*        <h1 className="font-bold break-keep">*/}
                {/*            <span className="text-5xl text-purple-400">스윗칭</span>*/}
                {/*            <span className="text-2xl text-gray-800 ps-5">sweetching</span>*/}
                {/*        </h1>*/}
                {/*        <h1 className="flex mt-5 text-xl text-gray-600 break-keep">*/}
                {/*            퓨치를 통해 탄생한, 반익명 커뮤니티 형태의 데이팅 플랫폼*/}
                {/*        </h1>*/}
                {/*        <h1 className="flex break-keep mt-3 text-gray-600">*/}
                {/*            *반익명 : 실물(성병&범죄&외모) 페르소나가 부여된 새로운 형태의 익명*/}
                {/*        </h1>*/}
                {/*    </div>*/}

                {/*    <div className="flex flex-row flex-grow items-center justify-center gap-24 w-full">*/}
                {/*        <div className="w-1/4 flex-col items-center">*/}
                {/*            <h1 className="text-gray-600 font-bold break-keep">하나의 서비스 안, 두 개의 다른 테마</h1>*/}
                {/*            <img className="object-cover w-full" src={MainServiceSample}/>*/}
                {/*        </div>*/}
                {/*        <div className="w-1/4 flex-col items-center">*/}
                {/*            <h1 className="text-gray-600 font-bold break-keep">각 테마 별, 다른 반익명 개념 적용</h1>*/}
                {/*            <img className="object-cover w-full" src={MainServiceSample}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {/*팀 소개*/}
            <div
                className="TeamMember flex flex-col min-h-screen px-24 items-center justify-center bg-purple-50 gap-24">
                <h1 className="text-4xl font-extrabold break-keep">Our Team</h1>
                <div className="flex flex-row min-w-[1100px] items-center justify-center gap-24 flex-wrap">
                    <div className="w-full h-fit flex flex-row justify-center items-top space-x-1">
                        {/*팀원1*/}
                        <div className="flex-shrink max-w-full px-4">
                            <div className="relative overflow-hidden  mb-12 hover-grayscale-0 wow fadeInUp"
                                 data-wow-duration="1s">
                                <div className="relative overflow-hidden px-6">
                                    <img src={MemberImage1} className="max-w-full h-40 mx-auto rounded-full"
                                         alt="title assets"/>
                                </div>
                                <div className="pt-6 text-center">
                                    <p className="text-xl leading-normal font-bold mb-1">박세환</p>
                                    <p className="text-gray-500 leading-relaxed font-light">대표</p>
                                    <p className="text-gray-500 leading-relaxed font-light break-keep">한양대학교 경영학과</p>
                                    <p className="text-gray-500 leading-relaxed font-light break-keep">"한국의 일론머스크"</p>
                                </div>
                            </div>
                        </div>
                        {/*팀원1 끝*/}
                        {/*팀원2*/}
                        <div className="flex flex-wrap flex-row -mx-4 justify-center">
                            <div className="relative overflow-hidden mb-12 hover-grayscale-0 wow fadeInUp"
                                 data-wow-duration="1s">
                                <div className="relative overflow-hidden px-6">
                                    <img src={MemberImage2} className="max-w-full h-40 mx-auto rounded-full"
                                         alt="title assets"/>
                                </div>
                                <div className="pt-6 text-center">
                                    <p className="text-xl leading-normal font-bold mb-1">강예일</p>
                                    <p className="text-gray-500 leading-relaxed font-light">기획</p>
                                    <p className="text-gray-500 leading-relaxed font-light break-keep">한양대학교 경영학과</p>
                                    <p className="text-gray-500 leading-relaxed font-light break-keep">"강하고 담대한 사람"</p>
                                </div>
                            </div>
                        </div>
                        {/*팀원2 끝*/}
                        {/*팀원3*/}
                        <div className="flex flex-wrap flex-row -mx-4 justify-center">
                            <div className="relative overflow-hidden mb-12 hover-grayscale-0 wow fadeInUp"
                                 data-wow-duration="1s">
                                <div className="relative overflow-hidden px-6">
                                    <img src={MemberImage3} className="max-w-full h-40 mx-auto rounded-full"
                                         alt="title assets"/>
                                </div>
                                <div className="pt-6 text-center">
                                    <p className="text-xl leading-normal font-bold mb-1">박혜민</p>
                                    <p className="text-gray-500 leading-relaxed font-light">디자이너</p>
                                    <p className="text-gray-500 leading-relaxed font-light break-keep">홍익대학교
                                        디자인컨버전스학과</p>
                                    <p className="text-gray-500 leading-relaxed font-light break-keep">"미래를 그리는 디자이너"</p>
                                </div>
                            </div>
                        </div>
                        {/*팀원3 끝*/}
                        {/*팀원4*/}
                        <div className="flex flex-wrap flex-row -mx-4 justify-center">
                            <div className="relative overflow-hidden  mb-12 hover-grayscale-0 wow fadeInUp"
                                 data-wow-duration="1s">
                                <div className="relative overflow-hidden px-6">
                                    <img src={MemberImage4} className="max-w-full h-40 mx-auto rounded-full"
                                         alt="title assets"/>
                                </div>
                                <div className="pt-6 text-center">
                                    <p className="text-xl leading-normal font-bold mb-1">김지인</p>
                                    <p className="text-gray-500 leading-relaxed font-light">CTO</p>
                                    <p className="text-gray-500 leading-relaxed font-light break-keep">서울대학교 컴퓨터공학과</p>
                                    <p className="text-gray-500 leading-relaxed font-light break-keep">"매칭의 새로운 미래를</p>
                                    <p className="text-gray-500 leading-relaxed font-light break-keep">코딩하는 CTO"</p>
                                </div>
                            </div>
                        </div>
                        {/*팀원4 끝*/}
                        {/*팀원5*/}
                        <div className="flex flex-wrap flex-row -mx-4 justify-center">
                            <div className="relative overflow-hidden  mb-12 hover-grayscale-0 wow fadeInUp"
                                 data-wow-duration="1s">
                                <div className="relative overflow-hidden px-6">
                                    <img src={MemberImage5} className="max-w-full h-40 mx-auto rounded-full"
                                         alt="title assets"/>
                                </div>
                                <div className="pt-6 text-center">
                                    <p className="text-xl leading-normal font-bold mb-1">곽용우</p>
                                    <p className="text-gray-500 leading-relaxed font-light">개발자</p>
                                    <p className="text-gray-500 leading-relaxed font-light">한양대학교</p>
                                    <p className="text-gray-500 leading-relaxed font-light">컴퓨터소프트웨어학부</p>
                                </div>
                            </div>
                        </div>
                        {/*팀원5 끝*/}
                    </div>
                </div>
            </div>

            <div className="Contact flex flex-col items-start min-h-screen justify-center p-24 gap-24">
                <div className="flex flex-col items-start justify-center gap-6">
                    <h1 className="text-6xl font-bold break-keep">Contact</h1>
                    <h1 className="text-2xl font-bold text-gray-600 break-keep">퓨치에게 연락하세요</h1>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                    <h1 className="text-2xl font-bold break-keep text-purple-400">회사 이메일</h1>
                    <h1 className="text-xl font-semibold text-gray-600 break-keep">putchvalue@gmail.com</h1>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                    <h1 className="text-2xl font-bold break-keep text-purple-400">박세환 대표</h1>
                    <h1 className="text-xl font-semibold text-gray-600 break-keep">010-4117-7888</h1>
                </div>
            </div>
        </main>
    )
}

export default Main;
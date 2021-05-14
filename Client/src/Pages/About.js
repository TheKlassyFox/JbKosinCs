import React from 'react';
import '../App.css';

class About extends React.Component
{
    render()
    {
        return (

            <section>
                <div className="filter"></div>
                <h1>대회 안내</h1>
                <div className="contents">
                    <p style={{lineHeight: "2rem"}}>
                        <br />
                        <span style={{fontSize: "1.2em", fontWeight: "bold"}}>샬롬!</span>
                        <br />
                        <br />
                        <br />
                        제 24회 부산중부 그리기/글짓기 대회에 참가하신 주일학교 어린이 여러분을 축복합니다.
                        <br />
                        아래의 대회순서를 꼭 읽어주시기 바랍니다.
                        <br />
                        <br />
                        <br />
                        1. 오전 9시 50분에 유튜브 검색 창에 <a href="https://www.youtube.com/results?search_query=%EC%A0%9C+24%ED%9A%8C+%EB%B6%80%EC%82%B0%EC%A4%91%EB%B6%80+%EA%B7%B8%EB%A6%AC%EA%B8%B0%2F%EA%B8%80%EC%A7%93%EA%B8%B0+%EB%8C%80%ED%9A%8C" target="_blank" rel="noreferrer">'제24회 부산중부 그리기/글짓기 대회'</a>를 검색하여 입장합니다.
                        <br />
                        2. 오전 10시부터 약 20분간 개회 예배를 드립니다. (마지막에 대회주제 발표)
                        <br />
                        3. 오후 12시까지 주제에 맞게 작품을 완성합니다. (완성 후 휴대폰으로 촬영)
                        <br />
                        <span className="warning">※ 오전 11시부터 자유롭게 제출합니다.</span>
                        <br />
                        <span className="warning">※ 원고지/도화지에는 교회명 또는 참가자 이름 절대 표기 금지!!!</span>
                        <br />
                        4. 오후 12시 30분까지 작품 제출을 마감합니다.
                        <br />
                        5. 오후 2시에 유튜브에서 <a href="https://www.youtube.com/results?search_query=%EC%A0%9C+24%ED%9A%8C+%EB%B6%80%EC%82%B0%EC%A4%91%EB%B6%80+%EA%B7%B8%EB%A6%AC%EA%B8%B0%2F%EA%B8%80%EC%A7%93%EA%B8%B0+%EB%8C%80%ED%9A%8C-%EA%B2%BD%ED%92%88+%EC%B6%94%EC%B2%9C+%EC%9D%B4%EB%B2%A4%ED%8A%B8" target="_blank" rel="noreferrer">'제24회 부산중부 그리기/글짓기 대회-경품 추첨 이벤트'</a>를 시청합니다.
                        <br />
                        6. 오후 3시까지 대회 결과가 게시됩니다.
                        <br />
                        7. 5월 22일까지 상장이 각 교회 주일학교로 전달됩니다.
                        <br />
                        8. 경품은 개인에게 직접 전달됩니다.
                        <br />
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
            </section>
        );
    }
}

export default About;
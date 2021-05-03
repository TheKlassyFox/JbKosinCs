import React from 'react';
import '../App.css';

class About extends React.Component
{
    render()
    {
        return (

            <section>
                <div className="filter"></div>
                <div className="contents">
                    <p style={{lineHeight: "2rem"}}>
                        <br />
                        <span style={{fontSize: "1.2em", fontWeight: "bold"}}>샬롬!</span>
                        <br />
                        <br />
                        <br />
                        제24회 부산중부 그리기/글짓기 대회에 참가하신 주일학교 어린이 여러분을 축복합니다.
                        <br />
                        아래의 대회순서를 꼭 읽어 주시기 바랍니다.
                        <br />
                        <br />
                        <br />
                        1. 오전9시50분 유튜브 검색창에 “제24회 부산중부 그리기/글짓기 대회” 검색하여 입장
                        <br />
                        2. 오전10시 개회예배 드립니다 (약20분간, 마지막에 대회주제 발표)
                        <br />
                        3. 오후12시까지 주제에 맞게 작품 완성합니다 (완성 후 폰으로 촬영)
                        <br />
                        ※ 11시부터 자유롭게 업로드
                        <br />
                        ※ 원고지/도화지에는 교회명, 참가자이름 절대 표기금지!!!!
                        <br />
                        4. 오후12시30분까지 제출 마감합니다
                        <br />
                        5. 오후2시 유튜브에서 “제24회 부산중부 그리기/글짓기 대회-경품 추첨 이벤트” 시청
                        <br />
                        6. 오후3시 이전 대회결과 게시
                        <br />
                        7. 상장은 5월22일 전까지 각교회 주일학교로 전달됩니다
                        <br />
                        8. 경품은 개인에게 직접 전달됩니다 
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
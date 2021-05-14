import React from 'react';
import Axios from 'axios';

class TextForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {eventsAvailable: [{eventId: "선택", name: "선택"}], eventId: "선택", name: "", what: "", church: "", submissionImage: "", image: "", onSubmitting: false, time: "." };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.eventEnd = new Date("2021-05-15T12:30:00");
    }

    async componentDidMount()
    {
        setInterval(() =>
        {
            var diff = this.eventEnd - new Date();

            if (diff > 0)
            {
                var days = Math.floor(diff / (1000 * 60 * 60 * 24));
                diff -=  days * (1000 * 60 * 60 * 24);
    
                var hours = Math.floor(diff / (1000 * 60 * 60));
                diff -= hours * (1000 * 60 * 60);
    
                var mins = Math.floor(diff / (1000 * 60));
                diff -= mins * (1000 * 60);
    
                var seconds = Math.floor(diff / (1000));
                diff -= seconds * (1000);

                if (days === 0 && hours === 0 && mins < 30)
                {
                    this.setState({what: "dored"});
                    if (mins === 0 && seconds === 0)
                    {
                        this.setState({what: ""});
                    }
                }
    
                this.setState({time: `접수 마감까지 ${days}일 ${hours}시간 ${mins}분 ${seconds}초`});
            }
            else
            {
                this.setState({time: "접수 종료 (늦은 제출 가능)"});
            }
        }, 1000);

        const data = await fetch("/get/events/available");

        if (data !== undefined)
        {
            this.setState({eventsAvailable: this.state.eventsAvailable.concat(await data.json())});
        }
    }

    async handleSubmit(event)
    {
        event.preventDefault();

        this.setState({onSubmitting: true});

        if (this.state.eventId === "선택" || this.state.eventId === undefined)
        {
            alert("참가 대회를 선택해주세요.");
        }
        else if (this.state.name === "" || this.state.name.length < 2 || this.state.name.length > 30)
        {
            alert("이름을 입력해주세요. (길이 2-30)");
        }
        else if (this.state.church === "" || this.state.church.length < 2 || this.state.name.length > 30)
        {
            alert("교회를 입력해주세요. (길이 2-30)");
        }
        else if (this.state.image === undefined || this.state.image === "")
        {
            alert("제출 사진을 업로드해주세요.");
        }
        else
        {
            const f = new FormData();
            f.append("image", this.state.image);
            f.append("eventId", this.state.eventId);
            f.append("name", this.state.name);
            f.append("church", this.state.church);

            await Axios.post("/add/participants", f).then(res => 
                {
                    this.setState({onSubmitting: false});
                    alert(`이름: ${this.state.name}\n교회: ${this.state.church}\n제출되었습니다.\n대회 결과는 오후 3시까지 게시됩니다.`);
                    this.setState({ eventId: "선택", name: "", church: "", submissionImage: "", image: "" });
                }
                ).catch(err => {alert(`접수 제출 에러: ${err.response ? err.response.data.message : err.message}`); this.setState({onSubmitting: false});}); 


        }

        this.setState({onSubmitting: false});
    }

    render()
    {
        return (

            <form onSubmit={this.state.onSubmitting ? null : this.handleSubmit} className="registerForm">
                <p style={{textAlign: "center", fontSize: '0.9em'}} className={this.state.what}>{this.state.time}</p>
                <br />
                <label>
                    <span>종목:</span>
                    <select value={this.state.eventId} onChange={(e) => this.setState({eventId: e.target.value})}>
                        { this.state.eventsAvailable ? this.state.eventsAvailable.map((e, i) => <option key={i} value={e.eventId}>{e.name}</option>) : "" }
                    </select>
                </label>
                <label>
                    <span>이름:</span>
                    <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                </label>
                <label>
                    <span>교회:</span>
                    <input type="text" value={this.state.church} onChange={(e) => this.setState({church: e.target.value})}/>
                </label>
                <label>
                    <span>제출:</span>
                    <input type="file" accept="image/*" onChange={(e) => this.setState({image: e.target.files[0]})} />
                </label>
                
                <input className={this.state.onSubmitting ? "submit deactive" : "submit"} type="submit" value={this.state.onSubmitting ? "접수 중..." : "확인"} />
                <p style={{textAlign: "center", color: "pink", marginTop: "10px", fontSize: '0.75em'}}>파일 사이즈에 따라 오래 걸릴 수 있습니다.<br />접수 중에 창을 닫지마세요.</p>
            </form>
        );
    }
}

export default TextForm;
import React from 'react';
import Axios from 'axios';

class TextForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {eventsAvailable: [{eventId: "선택", name: "선택"}], eventId: "선택", name: "", church: "", submissionImage: "", image: "", onSubmitting: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount()
    {
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
            alert("이름을 입력해주세요. 길이 2-30");
        }
        else if (this.state.church === "" || this.state.church.length < 2 || this.state.name.length > 30)
        {
            alert("교회를 입력해주세요. 길이 2-30");
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
                alert(`이름: ${this.state.name}\n교회: ${this.state.church}\n등록되었습니다.`);
                this.setState({ eventId: "선택", name: "", church: "", submissionImage: "", image: "" });
                this.setState({onSubmitting: false});
            }
            ).catch(err => {alert(`접수 제출 에러: ${err.response ? err.response.data.message : err.message}`); this.setState({onSubmitting: false});}); 
        }

        this.setState({onSubmitting: false});
    }

    render()
    {
        return (

            <form onSubmit={this.state.onSubmitting ? null : this.handleSubmit} className="registerForm">
                <label>
                    <span>대회:</span>
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
            </form>
        );
    }
}

export default TextForm;
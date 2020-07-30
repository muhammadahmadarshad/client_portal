import React from 'react';
import './BMI.css'
class BMI extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', weight: '', height: '', bmi: 0, message: '', optimalweight: '' };
        this.submit = this.submit.bind(this);
        this.heightchange = this.heightchange.bind(this);
        this.weightchange = this.weightchange.bind(this);
        this.namechange = this.namechange.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);

    }

    submit(e) {
        e.preventDefault()
        this.calculateBMI();
    }


    heightchange(e) {
        e.preventDefault()
        this.setState({ height: e.target.value })
    }
    weightchange(e) {
        e.preventDefault()
        this.setState({ weight: e.target.value })
    }

    namechange(e) {
        e.preventDefault()
        this.setState({ name: e.target.value });

    }


    calculateBMI() {
        var heightsq = (this.state.height / 100 * this.state.height / 100)
        var bmi = this.state.weight / heightsq;
        var low = Math.round(18.5 * heightsq);
        var high = Math.round(24.99 * heightsq);
        var message = "";
        if (bmi >= 18.5 && bmi <= 24.99) {
            message = "You are in healthy weight range.."

        }
        else if (bmi >= 25 && bmi <= 29.99) {
            message = "You are overweight. You need to reduce.."

        }
        else if (bmi >= 30) {
            message = "you are obese.."

        }
        else if (bmi < 18.5) {
            message = "You are under weight, need to gain.."

        }
        this.setState({ message: message })
        this.setState({ optimalweight: "your suggested weight should be between " + low + " - " + high })
        this.setState({ bmi: Math.round(bmi * 100) / 100 })
    }


    render() {
        return (
            <div className="bmi">

                <div className="themed-container" fluid="md">

                    <div className="header">
                        <h1 className="text-white"> BMI Calculator</h1>
                    </div>
                    <form onSubmit={this.submit} >
                        <div className="form-group-bmi row">
                            <div className="col-md-4">

                                <label >Enter your Name: </label>
                                <input type="text" className="form-control-bmi" name="name" value={this.state.name} onChange={this.namechange} />
                            </div>
                        </div>

                        <div className="form-group-bmi row">
                            <div className="col-md-4">

                                <label >Enter your height in cm:</label>
                                <input type="text" className="form-control-bmi" name="height" value={this.state.height} onChange={this.heightchange} />
                            </div>
                        </div>
                        <div className="form-group-bmi row">
                            <div className="col-md-4">

                                <label >Enter your weight in kg :</label>
                                <input type="text" className="form-control-bmi" name="weight" value={this.state.weight} onChange={this.weightchange} />
                            </div>
                        </div>
                        <label>HEllo {this.state.name}. Your BMI is {this.state.bmi}</label>
                        <br />
                        <label>{this.state.message}</label>
                        <br />
                        <label>{this.state.optimalweight}</label>
                        <div className="form-group-bmi row">
                            <div className="col-md-4">

                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );

    }
}

export default BMI;

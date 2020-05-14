import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="Query">
                    <strong>Book</strong>
                </label>
                <input className="form-control"
                id="Title"
                type="text"
                value={q}
                placeholder="Twilight... or something like that"
                name="q"
                onChange={handleInputChange}
                required />
            </div>
            <div className="pull-right">
                <button onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn-danger" >Search
                    </button>
            </div>
        </form>
    );
}

export default Form;
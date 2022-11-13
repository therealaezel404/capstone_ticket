import React from "react";

class PermissionsCheckboxForm extends React.Component {
  constructor() {
    super();
    this.state = {
      permissions: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    if (target.checked) {
      this.state.permissions[value] = value;
    } else {
      this.state.permissions.splice(value, 1);
    }
  }
  submit() {
    console.warn(this.state);
  }
  render() {
    return (
      <div className="permissions">
        <div className="row">
          <div className="col-md-6">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="checkbox-title">
                  Permissions
                  <p>
                    {" "}
                    (Select all permissions you wish to apply to this role)
                  </p>
                </label>
                <br />

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="permissions"
                    id="inlineCheckboxh1"
                    value="1"
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckboxh1"
                  >
                    View Dashboard Tab
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="permissions"
                    id="inlineCheckboxh2"
                    value="2"
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckboxh2"
                  >
                    Manage Service Request
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="permissions"
                    id="inlineCheckboxh3"
                    value="3"
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckboxh3"
                  >
                    View All Tickets Tab
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="permissions"
                    id="inlineCheckboxh4"
                    value="4"
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckboxh4"
                  >
                    Manage All Tickets
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="permissions"
                    id="inlineCheckboxh5"
                    value="5"
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckboxh5"
                  >
                    Manage Categories
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="permissions"
                    id="inlineCheckboxh6"
                    value="6"
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckboxh6"
                  >
                    Manage Users
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="permissions"
                    id="inlineCheckboxh7"
                    value="7"
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckboxh7"
                  >
                    Manage User Roles
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="permissions"
                    id="inlineCheckboxh8"
                    value="8"
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckboxh8"
                  >
                    Manage Templates
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="permissions"
                    id="inlineCheckboxh9"
                    value="9"
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckboxh9"
                  >
                    View Feedback Tab
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="permissions"
                    id="inlineCheckboxh10"
                    value="10"
                    onChange={this.handleInputChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckboxh10"
                  >
                    Manage feedback
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PermissionsCheckboxForm;

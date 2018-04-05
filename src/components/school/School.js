import React, { Component } from 'react';

import './School.css';
import Department from '../department';

export default class School extends Component {
  state = { data: null, loading: true, error: false }

  async componentDidMount() {
    try {
      const data = await this.fetchData(this.props.match);
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching data', e);
      this.setState({ error: true, loading: false });
    }
  }

  async componentWillReceiveProps(newProps) {
    try {
      const data = await this.fetchData(newProps.match);
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching data', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData(match) {
    const url = match.params.svid;
    const response = await fetch(process.env.REACT_APP_SERVICE_URL + url);
    const data = await response.json();
    console.log(data)
    return data;
  }

  onHeaderClick = (noteId) => {
    return (e) => {
      const visibleNote = this.state.visibleNote === noteId ? null : noteId;
      this.setState({ visibleNote });
    }
  }

  render() {
    const { data, loading, error } = this.state;
    if (loading) {
      return (<div>Sæki gögn...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gögn</div>);
    }
    return (
      data.school.departments.map((e, i) => {
        return (
          <Department
            key={e.heading}
            title={e.heading}
            data={e}
            visible={this.state.visibleNote === e.heading}
            onHeaderClick={(this.onHeaderClick(e.heading))}
          />
        )
      })
    )
  }

}
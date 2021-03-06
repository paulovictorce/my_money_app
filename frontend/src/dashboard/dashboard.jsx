import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from '../dashboard/dashboardActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    
    componentWillMount() {
        this.props.getSummary()
    }
    
    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' text='Total de Créditos' value={`R$ ${credit}`} />
                        <ValueBox cols='12 4' color='red' icon='credit-card' text='Total de Débitos' value={`R$ ${debt}`} />
                        <ValueBox cols='12 4' color='blue' icon='money' text='Consolidado' value={`R$ ${credit - debt}`} />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })

const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

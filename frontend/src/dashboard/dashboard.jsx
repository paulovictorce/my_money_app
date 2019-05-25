import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' text='Total de Créditos' value='R$ 10,00' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' text='Total de Débitos' value='R$ 10,00' />
                        <ValueBox cols='12 4' color='blue' icon='money' text='Consolidado' value='R$ 0,00' />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard
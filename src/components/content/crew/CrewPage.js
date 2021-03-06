import React from 'react'
import Grid from '@material-ui/core/Grid'
import Content from '../Content'

import CrewProfile from './CrewProfile'
import CrewMembers from './CrewMembers'
import CrewCalendar from './CrewCalendar'
import CrewCode from './CrewCode'


export default function CrewPage () {
    return (
        <Content>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <CrewProfile /> 
                </Grid>

                <Grid container item xs={12} sm={6} lg={9} spacing={2} alignContent="flex-start">
                    <Grid item xs={12}>   
                        <CrewMembers />                     
                    </Grid>
                    <Grid item xs={6}>
                        <CrewCode />
                    </Grid>
                    <Grid item xs={6}>
                        <CrewCalendar />
                    </Grid>
                </Grid>
            </Grid>
        </Content>
    )
}



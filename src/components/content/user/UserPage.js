import React from 'react'
import Grid from '@material-ui/core/Grid'
import UserProfile from './UserProfile'
import Content from '../Content'
import UserDelegation from './UserDelegation'
import UserCrews from './UserCrews'
import UserMandates from './UserMandates'


export default function UserPage () {
    return (
        <Content>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={3}>
                    <UserProfile /> 
                </Grid>

                <Grid container item xs={12} sm={6} lg={9} spacing={3} alignContent="flex-start">
                    <Grid item xs={12}>                       
                        <UserDelegation />
                    </Grid>
                    <Grid item xs={12}>
                        <UserCrews />
                    </Grid>
                    <Grid item xs={12}>
                        <UserMandates />
                    </Grid>
                </Grid>
            </Grid>
        </Content>
    )
}
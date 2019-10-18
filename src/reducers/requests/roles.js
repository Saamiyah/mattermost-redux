// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow

import {combineReducers} from 'redux';
import {RoleTypes} from 'action_types';

import {handleRequest, initialRequestState} from './helpers';

import type {GenericAction} from 'types/actions';
import type {RolesRequestsStatuses, RequestStatusType} from 'types/requests';

function getRolesByNames(state: RequestStatusType = initialRequestState(), action: GenericAction): RequestStatusType {
    return handleRequest(
        RoleTypes.ROLES_BY_NAMES_REQUEST,
        RoleTypes.ROLES_BY_NAMES_SUCCESS,
        RoleTypes.ROLES_BY_NAMES_FAILURE,
        state,
        action
    );
}

export default (combineReducers({
    getRolesByNames,
    editRole,
}): (RolesRequestsStatuses, GenericAction) => RolesRequestsStatuses);

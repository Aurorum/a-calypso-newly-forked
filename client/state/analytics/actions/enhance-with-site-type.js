/**
 * External dependencies
 */
import { set } from 'lodash';

/**
 * Internal dependencies
 */
import { ANALYTICS_EVENT_RECORD } from 'state/action-types';
import { getSelectedSite } from 'state/ui/selectors';

/**
 * Enhances any Redux action that denotes the recording of an analytics event with an additional property which
 * specifies the type of the current selected site.
 *
 * @param {Object} action - Redux action as a plain object
 * @param {Function} getState - Redux function that can be used to retrieve the current state tree
 * @returns {Object} the new Redux action
 * @see client/state/utils/withEnhancers
 */
export default function enhanceWithSiteType( action, getState ) {
	const site = getSelectedSite( getState() );

	if ( site !== null ) {
		if ( action.type === ANALYTICS_EVENT_RECORD ) {
			set(
				action,
				'meta.analytics[0].payload.properties.site_type',
				site.jetpack ? 'jetpack' : 'wpcom'
			);
		} else {
			set( action, 'meta.analytics[0].payload.site_type', site.jetpack ? 'jetpack' : 'wpcom' );
		}
	}

	return action;
}

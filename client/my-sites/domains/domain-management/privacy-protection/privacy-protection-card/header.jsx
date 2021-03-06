/** @format */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import React from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import AddButton from './../card/add-button';

const PrivacyProtectionCardHeader = ( { selectedDomainName, selectedSite, translate } ) => (
	<header className="privacy-protection-card__header">
		<h3>{ translate( 'Privacy Protection' ) }</h3>

		<div className="privacy-protection-card__price">
			<h4 className="privacy-protection-card__price-per-user">
				{ translate( 'Free for all domains registered at WordPress.com.' ) }
			</h4>
		</div>

		<AddButton selectedDomainName={ selectedDomainName } selectedSite={ selectedSite } />
	</header>
);

PrivacyProtectionCardHeader.propTypes = {
	displayCost: PropTypes.string.isRequired,
	selectedDomainName: PropTypes.string.isRequired,
	selectedSite: PropTypes.oneOfType( [ PropTypes.object, PropTypes.bool ] ).isRequired,
	translate: PropTypes.func.isRequired,
};

export default localize( PrivacyProtectionCardHeader );

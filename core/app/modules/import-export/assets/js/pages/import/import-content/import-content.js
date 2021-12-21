import React, { useContext, useEffect } from 'react';
import { useNavigate } from '@reach/router';

import { SharedContext } from '../../../context/shared-context/shared-context-provider';
import { ImportContext } from '../../../context/import-context/import-context-provider';

import Layout from '../../../templates/layout';
import PageHeader from '../../../ui/page-header/page-header';
import KitContent from '../../../shared/kit-content/kit-content';
import Notice from 'elementor-app/ui/molecules/notice';
import InlineLink from 'elementor-app/ui/molecules/inline-link';
import Button from 'elementor-app/ui/molecules/button';
import WizardFooter from 'elementor-app/organisms/wizard-footer';

import './import-content.scss';

export default function ImportContent() {
	const sharedContext = useContext( SharedContext ),
		importContext = useContext( ImportContext ),
		navigate = useNavigate(),
		{ plugins, requiredPlugins, uploadedData, file, isProInstalledDuringProcess } = importContext.data,
		{ includes } = sharedContext.data,
		isImportAllowed = plugins.length || includes.length,
		isAllRequiredPluginsSelected = requiredPlugins.length === plugins.length,
		getNextPageUrl = () => {
			if ( includes.includes( 'templates' ) && uploadedData?.conflicts ) {
				return 'import/resolver';
			} else if ( plugins.length ) {
				return 'import/plugins-activation';
			}

			return 'import/process';
		},
		handleNextPage = () => {
			if ( ! isImportAllowed ) {
				return;
			}

			navigate( getNextPageUrl() );
		},
		getFooter = () => (
			<WizardFooter separator justify="end">
				<Button
					text={ __( 'Previous', 'elementor' ) }
					variant="contained"
					onClick={ () => {
						if ( requiredPlugins.length ) {
							navigate( 'import/plugins/' );
						} else {
							importContext.dispatch( { type: 'SET_FILE', payload: null } );
							navigate( 'import/' );
						}
					} }
				/>

				<Button
					variant="contained"
					text={ __( 'Next', 'elementor' ) }
					color={ isImportAllowed ? 'primary' : 'disabled' }
					onClick={ handleNextPage }
				/>
			</WizardFooter>
		);

	// On file change.
	useEffect( () => {
		if ( ! file ) {
			navigate( 'import' );
		}
	}, [ file ] );

	return (
		<Layout type="import" footer={ getFooter() }>
			<section className="e-app-import-content">
				<PageHeader
					heading={ __( 'Select which parts you want to apply', 'elementor' ) }
					description={ [
						__( 'These are the templates, content and site settings that come with your kit.', 'elementor' ),
						__( "All items are already selected by default. Uncheck the ones you don't want.", 'elementor' ),
					] }
				/>

				{
					! isAllRequiredPluginsSelected &&
					<Notice color="warning" label={ __( 'Required plugins are still missing.', 'elementor' ) } className="e-app-import-content__plugins-notice">
						{ __( "If you don't include them, this kit may not work properly.", 'elementor' ) } <InlineLink url="/import/plugins">{ __( 'Go Back', 'elementor' ) }</InlineLink>
					</Notice>
				}

				<KitContent manifest={ uploadedData?.manifest }	hasPro={ isProInstalledDuringProcess } />
			</section>
		</Layout>
	);
}

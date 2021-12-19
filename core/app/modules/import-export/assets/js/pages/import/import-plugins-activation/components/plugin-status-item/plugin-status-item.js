import Grid from 'elementor-app/ui/grid/grid';
import Checkbox from 'elementor-app/ui/atoms/checkbox';
import Text from 'elementor-app/ui/atoms/text';

import usePlugins from '../../../../../hooks/use-plugins';

export default function PluginStatusItem( { name, status } ) {
	const { PLUGIN_STATUS_MAP } = usePlugins(),
		{ ACTIVE, INACTIVE, NOT_INSTALLED } = PLUGIN_STATUS_MAP;

	if ( NOT_INSTALLED === status ) {
		return null;
	} else if ( INACTIVE === status ) {
		status = 'installed';
	} else if ( ACTIVE === status ) {
		status = 'activated';
	}

	return (
		<Grid container alignItems="center" key={ name }>
			<Checkbox rounded checked error={ 'failed' === status || null } onChange={ () => {} } />

			<Text tag="span" variant="xs" className="e-app-import-plugins-activation__plugin-name">
				{ name + ' ' + status }
			</Text>
		</Grid>
	);
}

PluginStatusItem.propTypes = {
	name: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
};

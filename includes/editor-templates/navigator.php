<?php
namespace Elementor;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>
<script type="text/template" id="tmpl-elementor-navigator">
	<div id="elementor-navigator__header">
		<i id="elementor-navigator__toggle-all" class="eicon-expand" data-elementor-action="expand"></i>
		<div id="elementor-navigator__header__title"><?php echo esc_html__( 'Navigator', 'elementor' ); ?></div>
		<div>
			<i id="elementor-navigator__float" class="demo-icon eicon-editor-external-link"></i>
			<i id="elementor-navigator__close" class="eicon-close"></i>
		</div>
	</div>
	<div id="elementor-navigator__elements"></div>
	<div id="elementor-navigator__footer">
		<i class="eicon-ellipsis-h"></i>
	</div>
</script>

<script type="text/template" id="tmpl-elementor-navigator__elements">
	<# if ( obj.elType ) { #>
		<div class="elementor-navigator__item">
			<div class="elementor-navigator__element__list-toggle">
				<i class="eicon-sort-down"></i>
			</div>
			<#
			if ( icon ) { #>
				<div class="elementor-navigator__element__element-type">
					<i class="{{{ icon }}}"></i>
				</div>
			<# } #>
			<div class="elementor-navigator__element__title">
				<span class="elementor-navigator__element__title__text">{{{ title }}}</span>
			</div>
			<div class="elementor-navigator__element__toggle">
				<i class="eicon-preview-medium"></i>
			</div>
			<div class="elementor-navigator__element__indicators"></div>
		</div>
	<# } #>
	<div class="elementor-navigator__elements"></div>
</script>

<script type="text/template" id="tmpl-elementor-navigator__elements--empty">
	<div class="elementor-empty-view__title"><?php echo esc_html__( 'Empty', 'elementor' ); ?></div>
</script>

<script type="text/template" id="tmpl-elementor-navigator__root--empty">
	<img class="elementor-nerd-box-icon" src="<?php echo ELEMENTOR_ASSETS_URL . 'images/information.svg'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>" />
	<div class="elementor-nerd-box-title"><?php echo esc_html__( 'Easy Navigation is Here!', 'elementor' ); ?></div>
	<div class="elementor-nerd-box-message"><?php echo esc_html__( 'Once you fill your page with content, this window will give you an overview display of all the page elements. This way, you can easily move around any section, column, or widget.', 'elementor' ); ?></div>
</script>

<template>
	<v-snackbar
		:value="controller.show"
		@input="controller.close()"
		:color="controller.config.color"
		:timeout="controller.config.timeout"
		top
		class="plugin__alert"
	>
		<v-icon :color="controller.config.iconColor" class="mr-3">{{ controller.config.icon }}</v-icon>
		<span :class="`${controller.config.textColor}--text`">{{ controller.config.message }}</span>
		<template v-slot:action="{ attrs }">
			<v-btn icon :color="controller.config.textColor" text v-bind="attrs" @click="controller.close()"
				><v-icon>mdi-close</v-icon></v-btn
			>
		</template>
	</v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { snackController } from '@components/snack-bar/snack-bar-controller';
@Component
export default class SnackBar extends Vue {
	controller = snackController;
}
</script>

<style scoped></style>

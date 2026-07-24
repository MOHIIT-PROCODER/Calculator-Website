<script lang="ts">
	import NumberInput from '../../forms/NumberInput.svelte';
	import SelectInput from '../../forms/SelectInput.svelte';
	import { calculateGPA, gpaScale } from '../../../calculations/other/gpa';

	let courses = $state([
		{ grade: 'A', credits: 3 },
		{ grade: 'B+', credits: 4 },
		{ grade: 'A-', credits: 3 }
	]);

	let result = $derived(calculateGPA(courses));

	const gradeOptions = Object.keys(gpaScale).map(g => ({ value: g, label: g }));

	function addCourse() {
		courses.push({ grade: 'A', credits: 3 });
	}

	function removeCourse(index: number) {
		courses.splice(index, 1);
	}
</script>

<div class="calculator-grid animate-fade-in">
	<div class="inputs-panel glass">
		<div class="panel-header">
			<h3>Your Courses</h3>
			<button class="add-btn" onclick={addCourse}>+ Add Class</button>
		</div>

		<div class="courses-list">
			{#each courses as course, index}
				<div class="course-row">
					<div class="col-grade">
						<SelectInput label="Grade" bind:value={course.grade} options={gradeOptions} />
					</div>
					<div class="col-credits">
						<NumberInput label="Credits" min={1} max={10} bind:value={course.credits} />
					</div>
					<button class="delete-btn" onclick={() => removeCourse(index)} aria-label="Remove Course">
						🗑️
					</button>
				</div>
			{/each}
		</div>
	</div>

	<div class="results-panel">
		<h3>GPA Summary</h3>
		<div class="summary-card glass">
			<span class="summary-label">Cumulative GPA</span>
			<span class="summary-value">{result.toFixed(2)}</span>
		</div>
	</div>
</div>

<style>
	.calculator-grid {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 2rem;
		align-items: start;
	}
	.inputs-panel {
		padding: 2rem;
	}
	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
	}
	h3 {
		font-size: 1.25rem;
		font-weight: 600;
	}
	.add-btn {
		background: var(--primary);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: var(--radius-md);
		cursor: pointer;
		font-weight: 600;
	}
	.courses-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.course-row {
		display: flex;
		align-items: flex-end;
		gap: 1rem;
	}
	.col-grade { flex: 2; }
	.col-credits { flex: 1; }
	
	.delete-btn {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.2rem;
		padding-bottom: 1rem;
	}
	.results-panel {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.summary-card {
		padding: 2rem;
		text-align: center;
		background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
	}
	.summary-label {
		display: block;
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}
	.summary-value {
		font-size: 3rem;
		font-weight: 700;
		color: var(--primary);
	}

	@media (max-width: 768px) {
		.calculator-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

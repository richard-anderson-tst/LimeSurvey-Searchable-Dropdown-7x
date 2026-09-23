# Searchable Dropdown for LimeSurvey 7

A LimeSurvey question theme that enhances a single-choice List (Dropdown) question with [Select2](https://select2.org/) search.

## Compatibility

- LimeSurvey 7.x
- Question-theme API version 1
- LimeSurvey 6.x is not supported by this release

The theme uses LimeSurvey's bundled jQuery, Select2, and Select2 Bootstrap 5 package. It does not ship a separate copy of those dependencies.

## Installation

1. Compress the `Searchable-Dropdown` directory as a ZIP archive.
2. In LimeSurvey, open **Configuration > Themes > Question themes**.
3. Upload and install the ZIP archive.
4. Create or edit a **List (Dropdown)** question and select **Searchable Dropdown** as its question theme.
5. Add the required answer options and save the question.

When using LimeSurvey 7's React survey editor, the survey must use Fruity TwentyThree or a survey theme based on it. This editor requirement does not restrict participant-side use of the question theme with other compatible survey themes.

## Smoke Test

After installation:

1. Preview a searchable dropdown and verify that typing filters its answers.
2. Enable **Other**, enter text, navigate forward and back, and confirm that the text persists.
3. Submit a response and confirm that the selected answer and Other text appear in response viewing or export.
4. Place two searchable dropdowns on one page and confirm each renders once and opens with focus in its search field.
5. Check the browser console for errors and test one narrow/mobile viewport for horizontal overflow.

## Custom Styling

Theme-specific styles are in:

`upload/themes/question/Searchable-Dropdown/survey/questions/answer/list_dropdown/assets/css/ssd.css`

The default rule gives Select2 controls a minimum width of 260 pixels.

## Legacy Reference Files

The files under `assets/demo` and the `ssd_6x_*.png` screenshots were created with LimeSurvey 6. They are retained only as references until the updated theme is validated and re-exported from a LimeSurvey 7 instance. They are not required to install or run the question theme.

Custom themes are provided without any warranty, implied or otherwise.

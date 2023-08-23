event.preventDefault()
If(
    Toggle1.Value Or (!Toggle1.Value And IsEmpty(ComboBox1.SelectedItems)),
    DisplayMode.Edit,
    DisplayMode.Disabled
)
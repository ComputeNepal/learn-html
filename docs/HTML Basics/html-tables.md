---
sidebar_position: 12
---

# HTML Tables

HTML tables are the collection of rows and tables where developers can arrange data in a systematic manner.

The `<table>` tag is used to define a table, `<tr>` is used to define a row, and `<td>` is used to define a column.

The following is an simple example of HTML Table.

```html title="table.html"
<table>
  <tr>
    <th>Name</th>
    <th>Favourite</th>
  </tr>
  <tr>
    <td>John Smith</td>
    <td>ComputeNepal</td>
  </tr>
</table>
```

In the above example, you may have noticed a new tag `<th>`. This tag defines the heading of a column in a table, in this case `Name` and `Favourite`.

The output of the above code is as follows:

***

<table>
  <tr>
    <th>Name</th>
    <th>Favourite</th>
  </tr>
  <tr>
    <td>John Smith</td>
    <td>ComputeNepal</td>
  </tr>
</table>

***

## Table Borders 

By default, there is borders for tables but you can add one by using `border` attribute.

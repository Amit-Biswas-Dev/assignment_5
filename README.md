DevStack — Technology Stack Builder

DevStack is an interactive web application that allows users to explore different technologies and build their own personalized technology stack.

Users can select technologies, see their selected technologies with a live count, remove individual technologies, or clear the complete list.



🛠️ Technologies Used
⚛️ React
📘 TypeScript
⚡ Vite
🎨 Tailwind CSS
🌼 DaisyUI
🎯 React Icons
🔔 React Hot Toast
📄 JSON
✨ Features


 1. Explore Technologies

Users can explore different technologies and view information such as:

Technology name
Icon
Category
Description
Badge
Rating
 2. Build Your Own Stack

Users can select technologies and add them to their personal stack.

The selected technology count is automatically updated.

 3. Manage Selected Technologies

Users can:

Remove individual technologies
Clear all selected technologies
See toast notifications when technologies are added or removed
See "No technologies selected" when the list is empty



# 📚 React Questions & Answers

1. What is JSX, and why is it used in React?



JSX is the javascript xml file which allows us to write html-like code inside the file.


 2. What is the difference between props and state?

Props   passed data from a parent component to a child component. 

State is data managed inside a component and can change when the user interacts with the application.





 3. What does the `useState` hook do, and where did you use it in this project?

useState is a React Hook used to store and update data that can change over time.
When a technology is added or removed, the state changes and React updates the UI.

 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to handle side effects in React, such as fetching data or working with external systems.



 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React understand which items have been added, removed, or changed.



6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

I used it to show a different message depending on whether any technology is selected:

```tsx
{tech.length === 0
  ? "No technologies selected"
  : `Selected Technologies (${tech.length})`}
```

If there are no selected technologies, it shows **"No technologies selected"**. Otherwise, it shows the selected technology count.



7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using **props**.

In this project, `App` passes the selected technologies and functions to `SelectedCard`:

```tsx
<SelectedCard
  tech={savedT}
  onRemove={removeTech}
  onClear={clearList}
/>
```

The child can communicate back to the parent by calling a function received through props.

For example:

```tsx
onClick={() => onRemove(item.id)}
```

Here, `SelectedCard` calls `onRemove()`, which was created in the parent `App` component.

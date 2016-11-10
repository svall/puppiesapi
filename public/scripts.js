function getAllPuppies() {
  return fetch('/api/puppies')
    .then(r => r.json());
}

function adoptPuppy(payload) {
  return fetch('/api/puppies', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(payload) //needs to be sent to the db as a json string
  });
}

function likePuppy(e) {
  // Implement liking a puppy here.
  let id = parseInt(e.target.id);
  // console.log('id from script', id);
  // Implement liking a puppy here.
  return fetch(`/api/puppies/${id}`, {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'PUT',
  });
}

function abandonPuppy(e) {
  // Implement abandoning a puppy here :(
  let id = parseInt(e.target.id);
  // console.log('abandon id from script', id);
  return fetch(`/api/puppies/${id}`, {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'DELETE',
  });
}

function renderPuppies(puppies) {
  const $container = $('.adopted-puppies').empty();
  for (let i = 0; i < puppies.length; i += 1) {
    const $newPuppy = $('.puppy-template').clone();

    $newPuppy.removeClass('puppy-template')
      .addClass('puppy')
      .find('.name').text(puppies[i].name);

    $newPuppy
      .find('.likes').text(puppies[i].likes);

    $newPuppy
      .find('.abandon-puppy')
      .prop('id', puppies[i].id);

    $newPuppy
      .find('.puppy-picture img')
      .attr('src', puppies[i].url);

    // You should add a button for liking here
    const btn = $('<input type="button" value="Like"/>');
    btn.attr('id', puppies[i].id);
    btn.addClass('likeBtn');
    btn.on('click', likePuppy);
    $newPuppy.append(btn);

    // you should add a button for abandoning here
    const btndl = $('<input type="button" value="Abandon"/>');
    btndl.attr('id', puppies[i].id);
    btndl.addClass('delBtn');
    btndl.on('click', abandonPuppy);
    $newPuppy.append(btndl);


    $container.append($newPuppy);
    // registerLikeButtonHandler();
  }
}

function registerLikeButtonHandler() {
  // implement like button listener here.
  // $('.likeBtn').on('click', likePuppy);
}

function registerAbandonButtonHandler() {
  // implement abandon button listener here. :(
}

function registerFormHandler() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    const $form = $(this);
    const puppy = {
      name: $form.find('[name=name]').val(),
      url: $form.find('[name=url]').val()
    };
    // after posting puppy to db, we get all puppies again
    // it isasync programming
    adoptPuppy(puppy).then(() => {
      getAllPuppies().then(renderPuppies);
    });
  });
}


$(() => {
  registerFormHandler();
  registerLikeButtonHandler();
  registerAbandonButtonHandler();
  getAllPuppies().then(renderPuppies);
});

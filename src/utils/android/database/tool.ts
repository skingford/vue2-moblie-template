/*
 * @Author: kingford
 * @Date: 2021-10-26 16:23:54
 * @LastEditTime: 2021-10-26 20:11:00
 */
export function parseDesc(desc: any) {
  let args: any = [];
  args['tableName'] = desc['tableName'];
  args['fields'] = desc['fields'];
  let where = '';
  let selectionArgs: any[] = [];
  let conditions = desc['conditions'];

  for (let i = 0; i < conditions.length; i++) {
    let item = conditions[i];
    if (item.hasOwnProperty('start')) {
      let sense = item['start'];
      for (let j = 0; j < sense.length; j++) {
        where += sense[j]['l'] + ' ' + sense[j]['operator'] + ' ? ';
        if (sense[j]['r'] instanceof Array) {
          selectionArgs.push('(' + sense[j]['r'].join(',') + ')');
        } else {
          selectionArgs.push(sense[j]['r']);
        }
      }
    } else if (item.hasOwnProperty('and')) {
      let sense = item['and'];
      for (let j = 0; j < sense.length; j++) {
        where += ' and ' + sense[j]['l'] + ' ' + sense[j]['operator'] + ' ? ';
        if (sense[j]['r'] instanceof Array) {
          selectionArgs.push('(' + sense[j]['r'].join(',') + ')');
        } else {
          selectionArgs.push(sense[j]['r']);
        }
      }
    } else if (item.hasOwnProperty('or')) {
      let sense = item['or'];
      for (let j = 0; j < sense.length; j++) {
        where += ' or ' + sense[j]['l'] + ' ' + sense[j]['operator'] + ' ? ';
        if (sense[j]['r'] instanceof Array) {
          selectionArgs.push('(' + sense[j]['r'].join(',') + ')');
        } else {
          selectionArgs.push(sense[j]['r']);
        }
      }
    }
  }
  args['selection'] = where;
  args['selectionArgs'] = selectionArgs;
  //TODO sortby

  return args;
}

export function table(tableName: string) {
  let _tableName = tableName;
  let _fields: any;
  let _conditions: any[] = [];

  function trans2Normal(fields: any) {
    let result: any[] = [];
    if (fields.length === 1 && fields[0] instanceof Object) {
      for (let key in fields[0]) {
        if (fields[0].hasOwnProperty(key)) {
          // <- Ahh...What's this??
          let value = fields[0][key];
          result.push({ l: key, operator: '=', r: value });
        }
      }
      return result;
    } else if (fields.length === 2) {
      result.push({ l: fields[0], operator: '=', r: fields[1] });
    } else {
      result.push({ l: fields[0], operator: fields[1], r: fields[2] });
    }

    return result;
  }

  return {
    fields: function (fields: any) {
      _fields = fields;
      return this;
    },
    where: function () {
      _conditions.push({ start: trans2Normal(arguments) });
      return this;
    },
    andWhere: function () {
      _conditions.push({ and: trans2Normal(arguments) });
      return this;
    },
    orWhere: function () {
      _conditions.push({ or: trans2Normal(arguments) });
      return this;
    },
    build: function () {
      return {
        tableName: _tableName,
        fields: _fields,
        conditions: _conditions,
      };
    },
  };
}
